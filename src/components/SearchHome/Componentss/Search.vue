
<template>
<div class="colour">
  <div class="container">
    <div class="row middle">
      <div>
        <label class="texxxt">Местоположение</label><br>
        <input type="text" class="input-medium1 search-query" id="name" placeholder="Москва, ЮЗАО">
      </div>
      <div>
        <label class="texxxt">Бюджет на месяц</label><br>
        <input type="text" class="input-medium search-query" id="name1" placeholder="50000" >
      </div>
      <div>
        <label class="texxxt">Тип жилья</label><br>
        <button class="btn1 btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Комната</button>
                 <span class="sr-only">Toggle Dropdown</span>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Квартира</a>
                  <a class="dropdown-item" href="#">Комната</a>
                  <a class="dropdown-item" href="#">Рабочее место</a>
                  <a class="dropdown-item" href="#">Койко-место</a>
                </div>
      </div>
      <div>
        <label>        </label><br>
        <button class="btn"> Найти </button>  
      </div>
      <div>
        <label>        </label><br>
        <button class="btn2"> 
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
            </svg> 
          </button>
        </div>  
    </div>
    <br>
    <div class="row middle">
      <div>
        <label class="texxxtsort">Сортировка</label><br>
        <button class="btnsort btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">По умолчанию</button>
                 <span class="sr-only">Toggle Dropdown</span>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">По цене(убывание)</a>
                  <a class="dropdown-item" href="#">По цене(возрастание)</a>
                  <a class="dropdown-item" href="#">По времени до метро</a>
                  <a class="dropdown-item" href="#">По умолчанию</a>
                  <a class="dropdown-item" href="#">...</a>

                </div>
      </div>
      <div>
        <label>        </label><br>
        <button class="btnmap"> Карта </button>  
      </div>
    </div>
  </div>
</div>

</template>


<script>
export default {
    
}
</script>

<style>
  .middle {
    text-align:center;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;  
  }
  .texxxt {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    color: #000000;
  }
  .name-lbl {
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  } 

  .input-medium1 {
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    width: 432px;
    left: 4px;
    top: 21px;
    border-radius: 99px;
    margin-right: 8px;
    font-family: sans-serif;
    font-style: normal;
    font-size: 18px;
  }

  .input-medium {
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    width: 187px;
    left: 4px;
    top: 21px;
    border-radius: 99px;
    font-family: sans-serif;
    font-style: normal;
    font-size: 18px;
    margin-right: 8px;
  }
  
  .btn1 {
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    height: 50px;
    width: 194px;
    left: 4px;
    top: 21px;
    border-radius: 99px;
    font-family: sans-serif;
    font-style: normal;
    font-size: 18px;
    margin-right: 8px;
    }

  .btn {
    background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    width: 144px;
    left: 0px;
    top: 0px;
    border-radius: 99px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    margin-top: 8px;
    margin-right: 8px;
  }

  .btn:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);  
  }

  .btn2 {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 1);
    border-style: solid;
    border-color:rgba(136, 136, 136, 1);
    font-family: sans-serif;
    font-style: normal;
    margin-top: 8px;
    margin-right: 8px;
  }
  .bi {
    height: 32px;
    width: 32px;
    left: 0px;
    border-radius: 0px;
    color: rgba(81, 45, 228, 1);
  }
  .btnmap {
    background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 50px;
    width: 144px;
    left: 0px;
    top: 0px;
    border-radius: 99px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    margin-top: 8px;
    margin-right: 8px;
    margin-left: 294px;
  }
  .btnsort {
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    height: 50px;
    width: 318px;
    left: 4px;
    top: 21px;
    border-radius: 99px;
    font-family: sans-serif;
    font-style: normal;
    font-size: 18px;
    margin-right: 8px;
    margin-left: 258px;
    }
    .texxxtsort {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    color: #000000;
    margin-left: 258px;
  }
  </style>