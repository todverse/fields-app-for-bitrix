<template>
    <div id="app-container">
        <DxDataGrid 
            id="dataGrid"
            :data-source='employees'
            key-expr='ID'>
            
        </DxDataGrid>
    </div>
</template>
 
<script>
import { DxDataGrid } from 'devextreme-vue/data-grid';

export default {
    name: 'TableDataGrid',
    components: {
        DxDataGrid
    },
    data() {
        return {
            employees: [],
            count: 0,
        }
    },
    created() {
        let data = [];
        let values = [];
        
        class DataTable {
            constructor(name, description, value, permissions, ID) {
                this.name = name;
                this.description = description;
                this.value = value;
                this.permissions = permissions;
                this.ID = ID;
            }
        }

        let app = () => {
            let placement = BX24.placement.info().placement.split('_')[1].toLowerCase();
            let id = BX24.placement.info().options.ID;
            let name, description, value, permissions;
                BX24.callMethod(
                `crm.${placement}.fields`, 
                {}, 
                (result) => {
                    if(result.error()) {
                        console.error(result.error());
                    } else {
                        let keys = Object.keys(result.data());
                        for(let names in keys) {
                            BX24.callMethod(
                                `crm.${placement}.get`,
                                { id: id },
                                (result) => {
                                    if(result.error()) {
                                        console.error(result.error());
                                    } else {
                                        values[Number(names)] = result.data()[keys[names]];
                                    }
                                }
                            );
                        }
                    };
                }
            );
            BX24.callMethod(
                `crm.${placement}.fields`, 
                {}, 
                (result) => {
                    if(result.error()) {
                        console.error(result.error());
                    } else {
                        let keys = Object.keys(result.data());
                        for(let names in keys) {
                            name = keys[names];
                            description = result.data()[keys[names]].title;
                            if(result.data()[keys[names]].isDynamic) {
                              permissions = 'Динамичный';
                            } else if(result.data()[keys[names]].isImmutable) {
                              permissions = 'Неизменный';
                            } else if(result.data()[keys[names]].isMultiple) {
                              permissions = 'Множественный';
                            } else if(result.data()[keys[names]].isReadOnly) {
                              permissions = 'Только для чтения';
                            } else if(result.data()[keys[names]].isRequired) {
                              permissions = 'Обязательное';
                            } else {
                              permissions = '';
                            }
                            data[Number(names)] = new DataTable(name, description, value, permissions, names);
                        };
                        this.employees = data;
                    };
                });
                console.log(values);
        };
        BX24.init(app);
        console.log(values);
        setTimeout(() => {
            console.log(values);
            values.map((elem, index) => {
                this.employees[index].value = elem;
            });
        }, 10000)
    },
}
</script>
 
<style>
#dataGrid {
    height: 500px;
}
</style>