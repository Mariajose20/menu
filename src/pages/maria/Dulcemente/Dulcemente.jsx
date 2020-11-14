import React from 'react'
import './styles/estilos.scss'
import ImgUno from './images/uno.png'
import ImgDos from './images/dos.png'
import ImgTres from './images/tres.png'
import ImgCuatro from './images/cuatro.png'
import ImgCinco from './images/cinco.png'

const Dulcemente = () => {
  return (
    <div className="dulcemente">
      <header>
        <h1 align= "center"><u><i>DULCEMENTE</i></u></h1>
      </header>

      <br/>
      <header>
      <h2 align= "center"><i>5 Recetas de postres fáciles</i></h2>
      </header>
      <br/>

      <p align="justify"><i><mark>Tartas caseras,galletas,bizcochos...
        Tenemos variedad de postres para ti. ¡Escoge tu favorito!</mark></i></p>
      <br/> 
          
      <h3>#1 Tarta de galletas María</h3>

      <br/>

      <section>
        <p>La preparacion es demasiado sencilla. 
        No hace falta tener ningun conocimiento de cocina para hacer 
        este postre. Cualquier persona, novata o experta puede realizarla.</p>
      </section>

      <aside>
        
      <h3>Receta:</h3> 
      <p>Se trata de una tarta fria muy facil de hacer,
      de hecho, es una receta tan fácil que solo necesitas 
      tres ingredientes para prepararla.</p>
      </aside>
      <h4><u>Ingredientes:</u></h4>


      <ul>
        <li>2 paquetes de galletas Maráa</li>
        <li>Un sobre de natilla de chocolate</li>
        <li>Un sobre de natilla de vainilla
          (que si lo prefieres puedes sustituirlo 
          por otro sobre de chocolate)</li>
      </ul>
        

      <section>
        <h4><u><mark>Preparacion:</mark></u></h4>

        <ol>
          <li>Haz cada uno de los sobres de la natilla 
          en sus respectivas ollas segun las instrucciones 
          en la parte de atras del paquete.
          Deja reposar unos 5-10 minutos, no debe enfriarse 
          por completo porque se comienza a solidificar y no es la idea.</li>
          <li>Busca un recipiente profundo 
          que sirva como molde, puede ser una bandeja, 
          ensaladera, o cualquier vajilla profunda</li>
          <li>Seguidamente, con una cuchara, 
          agrega natilla de chocolate hasta que cubra 
          esta primera capa de galletas Maria</li>
          <li>Vuelve a colocar más galletas y luego natilla 
            de vainillas de aqu en adelante repite el
            proceso alternando una capa de chocolate por 
            una de vainilla procurando que la ultima capa 
            sea de chocolate.</li>
          <li>Guarda la tarta en la nevera y sírvela fría.</li>
        </ol>
      </section>

      <img  src={ImgUno}  alt= "TARTA DE GALLETAS MARIA" />
      
      <h3>#2 Galletas de chocolate caseras: ¡las mejores!</h3>
      
      <aside>
        <h3>Receta:</h3>
        <p>Con esta receta te van a salir ¡un monton! Pero da igual cuantas hagas, 
          te las vas a comer todas.</p>
      </aside>

      
      <h4><u>Ingredientes:</u></h4>
      <ul>
        <li>250 gramos de harina de trigo</li>
        <li>200 gramos de mantequilla sin sal</li>
        <li>100 gramos de azucar</li>
              <li>100 gramos de azucar</li>
        <li>40 gramos de cacao en polvo</li>
        <li>1 pizca de sal</li>
      </ul>
      

      <section>
      
        <h4><u><mark>Preparacion:</mark></u></h4>
        
        <ol>
          <li>Lo primero es que la mantequilla 
          debe estar a temperatura ambiente, 
          si la tenías en la nevera sácala un rato antes.</li>
          <li>Precalienta el horno a 180 grados.</li>
          <li>Mezcla la mantequilla con el azucar 
          en un bowl grande usando una batidora electrica 
          o si prefieres el viejo metodo con una cuchara de palo.</li>
          <li>Agrega la harina de trigo,
          el cacao y la pizca de sal. Continua mezclando
          hasta que se forme una masa homogenea.</li>
          <li>Coje una bandeja para hornear y ponle 
          una capa de papel vegetal.</li>
          <li>Amasa bolitas pequeñas, del tamaño de 
          una pelota de golf, ponlas sobre la bandeja 
          y aplastalas con un tenedor, cucharilla o con los dedos. 
          Procura que haya espacio entre cada una de las galletas 
          antes de meterlas al horno.</li>
          <li>Ahora simplemente hornea durante 20 minutos.</li>
          <li>Recuerda que algunos hornos cocinan más rápido 
          que otros así que este tiempo de 20 minutos 
          podría ser menor en tu caso, debes estar atento con esto.</li>
          <li>Una vez listas las galletas, sácalas de la bandeja, 
          amasa mas bolitas, aplástalas y sigue horneando 
          hasta que están hechas todas.</li>
        </ol>
      </section>

      <aside>
        <img src={ImgDos} alt= "GALLETAS DE CHOCOLATE"/>
      </aside>
      

      <h6><u>NOTA:</u></h6>

      <aside>

        <p><small><mark><em><b>Deja que reposen a temperatura ambiente.
          Se pueden guardar en la nevera, pero se van a poner muy duras luego. 
          Mi recomendacion es que <s>te las comas de una sola sentada</s> 
          las guardes en un lugar fresco y seco.</b></em></mark></small></p>
      </aside>

      <h3>#3 Mousse de chocolate en 4 pasos</h3>
      
      <aside>

        <h3>Receta:</h3> 
        <p>Una de las cosas más lindas de 
        esta recetamousse de chocolate  aparte
        de que es de chocolate y de que es fácil 
        es que es amiga del bolsillo. No hay que gastar
        mucho dinero porque los ingredientes son pocos.</p>
      </aside>

      <h4><u>Ingredientes:</u></h4>
      <ul>
      <li>100 gramos de azucar</li>
      <li>200 gramos de chocolate oscuro para fundir</li>
      <li>5 cucharadas repletas de mantequilla</li>
      <li>3 huevos de buen tamaño.</li>
      </ul>

      <section>
        <h4><u><mark>Preparacion:</mark></u></h4>
        <h5><u>Fundir el chocolate</u></h5>
        <ol>
        <li>Hay que partir el chocolate 
        en trocitos muy pequeños. Si 
        eres muy minucioso, puedes rallarlo tambien.</li>
        </ol>
        <h5><u>El punto de nieve</u></h5>
        <ol>
        <li>Para comenzar, separa la clara de la
          yema de los huevos.</li>
        <li>Con una batidora electrica, bate los
          claras con el azucar hasta que se
            conviertan en una crema a punto de nieve.</li>
        <li>De un buen montado de las claras va a 
          depender la consistencia final del postre.
          <b>Aqui unas recomendaciones para que 
          quede bien: asegurarse de que el molde 
          utilizado está totalmente seco y limpio, 
          verificar que no quede nada de yemas cuando
          se separen las claras, y añadir una pizca
            de sal antes de comenzar el batido.</b><u>No olvides 
              comenzar a batir lentamente,y luego 
              aumentar la velocidad.</u></li>
        </ol>
        


        <h5><u>La mezcla</u></h5>
        <ol>
        <li>En este punto, despues de que 
          la crema de chocolate y mantequilla 
          se haya enfriado, se incorporan las
          yemas y se bate hasta que queden 
          totalmente integradas.</li>
        <li>Ahora, se une la pasta achocolatada 
          con las claras montadas, batiendo
          hasta tener una mezcla homogonea.</li>
        </ol>
        <h5><u>Envasado</u></h5>
        <ol>
        <li>Por alguna razon, la costumbre 
          más popular es la de repartir la crema en copas o vasos.</li>
        <li>Hay que dejarlo por lo menos dos horas en refrigeracion. 
          De hecho, si se puede por mas tiempo, mejor.</li>
        </ol>
        <img src={ImgTres} alt= "MOUSSE DE CHOCOLATE"/>
      
      </section>

      <h3>#4 Bizcocho de Chocolate</h3>
        <aside>
        <h3>Receta:</h3>
      
        <p>Es ideal para comerlo acompañado de un vaso de leche o de una
          <b>taza de chocolate caliente</b>. Si le pones encima una capa de
            glaseado o de crema, puedes convertirlo en una 
            <b>torta de cumpleaños improvisada</b> para casos de emergencia.</p>
        </aside>
        <h4><u>Ingredientes:</u></h4>
      
        <ul>
          <li>125 gr de mantequilla sin sal</li>
          <li>125 gr de azucar</li>
          <li>3 huevos</li>
              <li>250 gr de harina de trigo</li>
          <li>1 copa de licor yo uso de ron saborizado con naranja</li>
          <li>4 cucharadas de cacao en polvo</li>
          <li>1 cucharadita de polvo de hornear</li>	
        </ul>
        
      
        <section>
        <h4><u><mark>Preparacion:</mark></u></h4>
      <ol>
      <li>Precalienta el horno a 180 grados.</li>
      <li>En un bowl vas a cremar 
        la mantequilla con el azucar utilizando 
        una batidora electrica. Posiblemente 
        tu batidora traiga su propio recipiente para mezclar</li>
      <li>Cuando se hayan mezclado bien comienza
        a agregar los huevos uno a uno. 
        Seguidamente comienzas a echar la harina 
        poco a poco junto al polvo de hornear</li>
      <li>Seguidamente, incorpora el cacao en
        polvo a la mezcla, que ya para este 
        momento debe estar cremosa y debe saber bien.</li>
      <li>Finalmente agrega la copa de licor. 
        Mezcla un minuto más y listo.</li>
      <li>Pon la mezcla en un molde de ponque 
        previamente mantequillado y enharinado</li>
      <li>Metelo al horno y dejalo cocinar 
        por 35-40 minutos aproximadamente</li>
      <li>Saca del horno y deja enfriar 
        antes de remover el bizcocho del molde.</li>
      </ol>
      <p>¡Listo! Ya tienes un delicioso postre casero y muy fácil.</p>
      </section>
      
      <aside>
      <img src={ImgCuatro} alt= "BIZCOCHO DE CHOCOLATE"/>
      </aside>
      

      
      
      <h3>#5 Galletas de mantequilla: </h3>
      <aside>
      <h3>Receta:</h3>
      
      <p>Las galletas de mantequilla son muy 
        faciles de hacer en casa. Hasta un niño puede prepararlas. </p>
      </aside>
        <h4><u>Ingredientes:</u></h4>
      <ul>
      <li>250 gramos de mantequilla sin sal</li>
      <li>150 gramos de azucar</li>
      <li>400 gramos de harina de trigo todo uso</li>
            <li>1 huevo</li>
      <li>Una pizca de sal</li>
      <li>Una pizca de canela en polvo opcional</li>	
      </ul>
      <section>
      <h4><u><mark>Preparacion:</mark></u></h4>
      
      <ol>
      <li>Precalienta el horno a 180 grados</li>
      <li>Bate la mantequilla con el azucar en un bowl mediano.</li>
      <li>Incorpora la sal, la canela si 
        decidiste ponerle y el huevo hasta que 
        se haga una pasta algo cremosa.</li>
      <li>Agrega la harina de 
        trigo poco a poco y ve mezclando hasta que no hayan grumos.</li>
      <li>Te debería quedar 
        una especie de ¡masa grande de 
        galleta! un poco solida. Metela en 
        la nevera por 30 minutos.</li>
      <li>Transcurrido el tiempo saca tu masa
        para galleta y extiendela en una superficie plana.</li>
      <li>Ahora simplemente con ayuda 
        de un cuchillo o de un molde redondo 
        ve cortando las galletas y poniendolas 
        en una bandeja para hornear previamente engrasada.</li>
      <li>Si lo prefieres puedes simplemente 
        amasar bolitas de harina, 
        ponerlas en la bandeja y aplastarlas 
        con el tenedor hasta darle la forma deseada.</li>
      <li>Mete en el horno y cocina 
        por 9-10 minutos o hasta que 
        los bordes de las galletas de 
        mantequilla estan ligeramente dorados.</li>
      <li>Retira la bandeja del horno, 
        saca las galletas y, si tienes 
        mas masa, repite nuevamente el 
        proceso hasta que las tengas todas listas.</li>
      <li>Dejalas enfriar sobre una plato o una cesta 
        con tela y ¡buen provecho!</li>
      </ol>
      </section>
      <img src={ImgCinco} alt= "GALLETAS DE MANTEQUILLA"/>

      <footer>
          <strong>
          <mark>
          Autor(a): Maria Piñerua <br />
          C.I V-28.320.983<br />
          Carrera: Ing. de Sistemas<br />
          </mark>
          </strong>
        </footer>
    </div>
  )
}

export default Dulcemente
