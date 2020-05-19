<?php

use Fusion\Facades\Theme;
use Illuminate\Support\Arr;

if (! function_exists('javascript')) {
    /**
     * Transform PHP variables to JavaScript.
     *
     * @param  array  $data
     * @return string
     */
    function javascript($data)
    {
        return Javascript::put($data);
    }
}

if (! function_exists('theme')) {
    /**
     * Fetches the theme property from the manifest file.
     *
     * @param  string  $key
     * @param  mixed  $default
     * @return mixed
     */
    function theme($key, $default = '')
    {
        $theme = Theme::active();

        if (request()->has('preview')) {
            $theme->put('setting', json_decode(request()->get('preview'), true));
        } else {
            $settingsFilePath = storage_path('themes/'.$theme->get('slug').'.json');

            if (! \File::exists($settingsFilePath)) {
                $defaults = collect($theme->get('settings'))->mapWithKeys(function($setting, $handle) {
                    return [$handle => $setting['default'] ?? null];
                });

                \File::put($settingsFilePath, json_encode($defaults, JSON_PRETTY_PRINT));
            }

            $theme->put('value', json_decode(\File::get($settingsFilePath), true));
        }

        $dotNotation = $theme->mapWithKeys(function($value, $handle) {
            return Arr::dot([$handle => $value]);
        });

        $theme = $theme->merge($dotNotation);

        return $theme->get($key, $default);
    }
}