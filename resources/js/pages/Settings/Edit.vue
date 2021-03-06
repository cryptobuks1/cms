<template>
    <div>
        <portal to="title">
            <page-title icon="cog">{{ group.name }} Settings</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons" v-if="form">
                <ui-button :to="{ name: 'settings' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <div class="row">
            <div class="col w-full">
                <shared-form v-if="form" :form="form" :group="group"></shared-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm.vue'

    export default {
        auth() {
            return {
                permission: 'settings.update',
            }
        },

        head: {
            title() {
                return {
                    inner: this.group.name + ' Settings' || 'Loading...'
                }
            }
        },

        data() {
            return {
                group: {},
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/settings/${this.group.handle}`)
                    .then((response) => {
                        toast('Settings saved successfully', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },
        },

        beforeRouteEnter(to, from, next) {
            getSettings(to.params.group, (error, group) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/settings')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.group  = group
                        vm.form   = new Form(group.settings)

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getSettings(group, callback) {
        axios.get(`/api/settings/${group}`)
            .then((response) => {
                callback(null, response.data.data)
            }).catch((error) => {
                callback(new Error('The requested settings could not be found'))
            })
    }
</script>