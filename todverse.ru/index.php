<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/bx_root.php';
	require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php';

	\Bitrix\Main\UI\Extension::load("ui.buttons"); 

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Bitrix24 app tutorial</title>
    <!-- подключаем библиотеку BX24 -->
    <script src="https://api.bitrix24.com/api/v1/"></script>
    <?= $GLOBALS["APPLICATION"]->ShowCSS() ?>
    <style>
    	.ui-btn-pad {
    		width: 220px;
        margin-top: 5px;
      }
      .ui-btn {
        margin-left: 0 !important;
      }
      .title {
        text-align: center;
      }
      .description {
        text-align: center;
      }
      .container_btn {
        width: 220px;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <h2 class='title'>Приложение "Показать Поля"</h2>
      <p class='description'>В верхнее меню карточек CRM добавлена кнопка Поля.<br />С ее помощью можно просмотреть доступные для данной карточки поля, их описание и некоторую допольнительную информацию</p>
    <div class='container_btn'>
      <button class='ui-btn ui-btn-danger-dark ui-btn-pad' id='btn_lead-on'>Отключить поля в Лидах</button>
      <button class='ui-btn ui-btn-success ui-btn-pad' id='btn_lead-off'>Включить поля в Лидах</button> <br />
      <button class='ui-btn ui-btn-danger-dark ui-btn-pad' id='btn_deal'>Отключить поля в Сделках</button>
      <button class='ui-btn ui-btn-success ui-btn-pad' id='btn_deal-off'>Включить поля в Сделках</button> <br />
      <button class='ui-btn ui-btn-danger-dark ui-btn-pad' id='btn_contact'>Отключить поля в Контактах</button>
      <button class='ui-btn ui-btn-success ui-btn-pad' id='btn_contact-off'>Включить поля в Контактах</button> <br />
      <button class='ui-btn ui-btn-danger-dark ui-btn-pad' id='btn_company'>Отключить поля в Компаниях</button>
      <button class='ui-btn ui-btn-success ui-btn-pad' id='btn_company-off'>Включить поля в Компаниях</button> <br />
  </div>
    <script>
    let domain = document.URL.slice(0, document.URL.indexOf("index.php"));
    console.log(domain);
    console.log(location.origin + location.pathname);
      BX24.install(install);

      function install() {
        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
          HANDLER: `${domain}hundler.php`, 
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
          HANDLER: `${domain}hundler.php`,  
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
          HANDLER: `${domain}hundler.php`, 
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
          HANDLER: `${domain}hundler.php`, 
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.installFinish();
      };

      BX24.init(app);

      function app() {
        let lead = document.getElementById('btn_lead-on');
        let lead_off = document.getElementById('btn_lead-off');
        let deal = document.getElementById('btn_deal');
        let deal_off = document.getElementById('btn_deal-off');
        let contact = document.getElementById('btn_contact');
        let contact_off = document.getElementById('btn_contact-off');
        let company = document.getElementById('btn_company');
        let company_off = document.getElementById('btn_company-off');

        BX24.callMethod('placement.get',
          {},
          (result) => {
            if(result.error()) {
              console.error(result.error());
            } else {
              console.log(result.data());
              result.data().forEach((i) => {
                if (i['placement'] === 'CRM_LEAD_DETAIL_TAB' && i['handler'] === 'https://tcrm.sknebo.ru/application/app-showfields/hundler.php') {
                  console.log('yes');
                  lead_off.style.display = 'none';
                } else if (i['placement'] === 'CRM_DEAL_DETAIL_TAB' && i['handler'] === 'https://tcrm.sknebo.ru/application/app-showfields/hundler.php') {
                  console.log('yes');
                  deal_off.style.display = 'none';
                } else if (i['placement'] === 'CRM_CONTACT_DETAIL_TAB' && i['handler'] === 'https://tcrm.sknebo.ru/application/app-showfields/hundler.php') {
                  console.log('yes');
                  contact_off.style.display = 'none';
                } else if (i['placement'] === 'CRM_COMPANY_DETAIL_TAB' && i['handler'] === 'https://tcrm.sknebo.ru/application/app-showfields/hundler.php') {
                  console.log('yes');
                  company_off.style.display = 'none';
                };
              });
              if(lead_off.style.display !== 'none') {
                lead.style.display = 'none';
              };
              if(deal_off.style.display !== 'none') {
                deal.style.display = 'none';
              };
              if(contact_off.style.display !== 'none') {
                contact.style.display = 'none';
              };
              if(company_off.style.display !== 'none') {
                company.style.display = 'none';
              };
            };
          }
          );
        
        lead.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            }, (result) => console.log(result));
            lead_off.style.display = 'inline-flex';
            lead.style.display = 'none';
        });
        lead_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
            lead.style.display = 'inline-flex';
            lead_off.style.display = 'none';
        });
        
        deal.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            }, (result) => console.log(result));
            deal_off.style.display = 'inline-flex';
            deal.style.display = 'none';
        });
        deal_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
            deal.style.display = 'inline-flex';
            deal_off.style.display = 'none';
        });
        
        contact.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            }, (result) => console.log(result));
            contact_off.style.display = 'inline-flex';
            contact.style.display = 'none';
        });
        contact_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
            contact.style.display = 'inline-flex';
            contact_off.style.display = 'none';
        });
        
        company.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            }, (result) => console.log(result));
            company_off.style.display = 'inline-flex';
            company.style.display = 'none';
        });
        company_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
            HANDLER: `${domain}hundler.php`, 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
            company.style.display = 'inline-flex';
            company_off.style.display = 'none';
        });
      }
    </script>
  </body>
</html>