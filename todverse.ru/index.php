<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <title>Bitrix24 app tutorial</title>
    <!-- подключаем библиотеку BX24 -->
    <script src="https://api.bitrix24.com/api/v1/"></script>
    <style>
        button {
            box-sizing: border-box;
            width: 120px;
            margin-right: 0;
            margin-left: 0;
            padding: 0;
            margin-bottom: 20px;
            background-color: transparent;
            border: 1px solid black;
        }
        button:hover {
            background-color: rgba(200,200,230,0.8);
            cursor: pointer;
        }
        .on {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border-left: none;
        }
        .off {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
        }
    </style>
  </head>
  <body>
      <p>В верхнее меню карточек CRM добавлена кнопка Поля.</p>
      <p>С ее помощью можно просмотреть доступные для данной карточки поля, их описание и некоторую допольнительную информацию</p>
      <button class='off' id='btn_lead-on'>Отключить поля в Лидах</button><button class='on' id='btn_lead-off'>Включить поля в Лидах</button> <br />
      <button class='off' id='btn_deal'>Отключить поля в Сделках</button><button class='on' id='btn_deal-off'>Включить поля в Сделках</button> <br />
      <button class='off' id='btn_contact'>Отключить поля в Контактах</button><button class='on' id='btn_contact-off'>Включить поля в Контактах</button> <br />
      <button class='off' id='btn_company'>Отключить поля в Компаниях</button><button class='on' id='btn_company-off'>Включить поля в Компаниях</button> <br />
    <script>
      BX24.install(install);

      function install() {
        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
          HANDLER: "./hundler.php", 
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
          HANDLER: "./hundler.php",  
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
          HANDLER: "./hundler.php", 
          TITLE: 'Поля', 
          DESCRIPTION: 'Показать поля', 
        }, (result) => console.log(result));

        BX24.callMethod('placement.bind', { 
          PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
          HANDLER: "./hundler.php", 
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
        
        lead.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            }, (result) => console.log(result));
        });
        lead_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_LEAD_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
        });
        
        deal.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            }, (result) => console.log(result));
        });
        deal_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_DEAL_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
        });
        
        contact.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            }, (result) => console.log(result));
        });
        contact_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_CONTACT_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
        });
        
        company.addEventListener('click', () => {
            BX24.callMethod('placement.unbind', { 
            PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            }, (result) => console.log(result));
        });
        company_off.addEventListener('click', () => {
            BX24.callMethod('placement.bind', { 
            PLACEMENT: 'CRM_COMPANY_DETAIL_TAB', 
            HANDLER: "./hundler.php", 
            TITLE: 'Поля', 
            DESCRIPTION: 'Показать поля', 
            }, (result) => console.log(result));
        });
      }
    </script>
  </body>
</html>