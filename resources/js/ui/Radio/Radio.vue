<template>
    <div class="field-check field-check--radio" :class="{'field-check--inline': inline}">
        <input
            class="field-check__input field-check__input--radio"
            type="radio"
            :name="name"
            :id="id"
            :disabled="disabled"
            :required="required"
            :indeterminate.prop="indeterminate"
            :value="nativeValue"
            :true-value="trueValue"
            :false-value="falseValue"
            @click.stop
            v-model="computedValue">
        <label :for="id" class="field-check__label">
            <slot></slot>
        </label>
    </div>
</template>


<script>
    export default {
        name: 'ui-radio',

        data() {
            return {
                model: false,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },
            id: {
                required: false
            },
            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },
            nativeValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol]
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            indeterminate: {
                type: Boolean,
                default: false,
            },
            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: false
            },
            inline: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        computed: {
            computedValue: {
                get() {
                    return this.model
                },

                set(value) {
                    this.model = value
                    this.$emit('input', value)
                }
            }
        },

        watch: {
            value(value) {
                this.model = value
            }
        }
    }
</script>
