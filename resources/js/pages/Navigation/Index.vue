<template>
    <div>
        <portal to="title">
            <page-title icon="anchor">Navigation</page-title>
        </portal>

        <portal to="actions">
            <ui-button :to="{ name: 'navigation.create' }" variant="primary">Create Navigation</ui-button>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="navigation" sort-by="name" primary-key="handle" key="navigation_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'navigation.nodes', params: {navigation: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <p>{{ table.record.description }}</p>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-actions :id="'navigation_' + table.record.id + '_actions'" :key="'navigation_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'navigation.nodes', params: {navigation: table.record.id} }">Manage</ui-dropdown-link>
                            <ui-dropdown-link :to="{ name: 'navigation.edit', params: {navigation: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-navigation="table.record"
                                classes="link--danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </div>
        </div>

        <portal to="modals">
            <ui-modal name="delete-navigation" title="Delete Navigation" key="delete_navigation">
                <p>Are you sure you want to permenantly delete this navigation?</p>

                <template slot="footer" slot-scope="navigation">
                    <ui-button v-modal:delete-navigation @click="destroy(navigation.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-navigation>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'navigation.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Navigations'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/navigation',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/navigation/' + id).then((response) => {
                    toast('Navigation successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-navigation')
                })
            }
        }
    }
</script>