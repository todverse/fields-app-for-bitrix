<template>
    <div id="app-container">
        <DxDataGrid 
            id="dataGrid"
            :data-source='employees'
            key-expr='ID'
            :allow-column-reordering="true"
            :ref="dataGridRefKey">
            <DxColumn
                data-field="Name"
                caption="Название"
                :allow-editing="false">

            </DxColumn>
            <DxColumn
                data-field="Description"
                caption="Описание"
                :allow-editing="false">

            </DxColumn>
            <DxColumn
                data-field="Value"
                caption="Значение"
                cell-template="grid-cell">

            </DxColumn>
            <template #grid-cell="{ data }">
              <div 
                onmouseover='this.style.wordWrap = "break-word";this.style.overflow = "wrap";this.style.whiteSpace = "normal";'
                onmouseout='this.style.wordWrap = "";this.style.overflow = "";this.style.whiteSpace = "";'>
                {{ data.value }}
              </div>
            </template>
            <DxColumn
                data-field="Permissions"
                caption="Разрешения"
                :allow-editing="false">

            </DxColumn>
            <DxEditing
                mode='row'
                :allow-updating='true'>
                <DxTexts 
                    editRow="Изменить"
                    saveRowChanges="Сохранить"
                    cancelRowChanges="Отменить"
                />
            </DxEditing>
            <DxGroupPanel :visible='true' emptyPanelText="Перенесите заголовок сюда что бы сгруппировать содержимое" />
          <DxSearchPanel :visible='true' placeholder="Поиск..." />
          <DxFilterRow :visible='true' />
          <DxPaging :page-size='10' />
        </DxDataGrid>
        <DxButton 
            text='Сохранить'
            @click='saveChanges'/>
    </div>
</template>
 
<script>
import { 
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxGroupPanel,
    DxSearchPanel,
    DxFilterRow,
    DxTexts,
    DxPaging,
    } from 'devextreme-vue/data-grid';

import DxButton from 'devextreme-vue/button';

const dataGridRefKey = 'myDataGrid';

export default {
    name: 'TableDataGrid',
    components: {
        DxDataGrid,
        DxColumn,
        DxEditing,
        DxButton,
        DxGroupPanel,
        DxSearchPanel,
        DxFilterRow,
        DxTexts,
        DxPaging,
    },
    data() {
        return {
            employees: [],
        }
    },
    methods: {
        saveChanges() {
            let obj = {};
            let placement = BX24.placement.info().placement.split('_')[1].toLowerCase();
            let id = BX24.placement.info().options.ID;
            for(let num in this.employees) {
                obj[this.employees[num].Name] = this.employees[num].Value
            };
            BX24.callMethod(
                `crm.${placement}.update`, 
                { 
                    id: id,
                    fields: obj,
                    params: { "REGISTER_SONET_EVENT": "Y" }		
                }, 
                function(result) 
                    {
                        if(result.error())
                            console.error(result.error());
                        else
                        {
                            console.info(result.data());						
                        }
                    }
            );
        },
    },
    computed: {
        dataGrid: function() {
            return this.$refs[dataGridRefKey].instance;
        }
    },
    created() {
        let data = [];

        let type_value = {
            WORK: 'Рабочий',
            MOBILE: 'Мобильный',
            FAX: 'Факс',
            HOME: 'Домашний',
            PAGER: 'Пейджер',
            MAILING: 'Для рассылок',
            OTHER: 'Другой',
            OPENLINE: 'Онлайн-чат',
            IMOL: 'Открытая линия',
        }; 

        class DataTable {
            constructor(name, description, value, permissions, ID) {
                this.Name = name;
                this.Description = description;
                this.Value = value;
                this.Permissions = permissions;
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
                        console.log('поля:');
                        console.log(result.data());
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
                        BX24.callMethod(
                            `crm.${placement}.get`,
                            { id: id },
                            (result) => {
                                if(result.error()) {
                                    console.error(result.error());
                                } else {
                                    console.log('значения:')
                                    console.log(result.data());
                                    let arr = [];
                                    let b = this.employees;
                                    Object.keys(result.data()).forEach(function(key) {
                                        arr.push(this[key]);
                                        for(let item in b) {
                                            if(b[item].Name === key) {
                                                if(Array.isArray(this[key])) {
                                                    b[item].Value = '';
                                                    this[key].forEach(elem => {
                                                        if(type_value[elem.VALUE_TYPE]) {
                                                            b[item].Value += `${type_value[elem.VALUE_TYPE]}: ${elem.VALUE}, `;
                                                        } else {
                                                            b[item].Value += `${elem.VALUE_TYPE}: ${elem.VALUE}, `;
                                                        };
                                                    });
                                                } else {
                                                    b[item].Value = this[key];
                                                }
                                            };
                                        };
                                    }, result.data());
                                }
                            }
                        );
                    };
                });
        };
        BX24.init(app);
    },
}
</script>
 