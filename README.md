# React a la PodemosAprender

Objetivos: 

1. Que cualquiera pueda desarrollar, aunque tenga una compu chiquita o lo haga en glitch.com
2. Que sea lo más parecido posible a react como lo usa el mercado (class, import, etc.)


Solución que encontramos:
1. Importamos react development, etc. en index.html
2. Usamos htm para las plantillas en vez de JSX así zafamos de babel
3. Tenemos import para nuestros módulos, para las librerías usamos el tag script y globales

Las plantillas de HTM se usan [así](https://github.com/developit/htm) y con eso nos ahorramos babel! (que sino se rompe, hace difícil sumar devs, etc.)

Entonces para desarrollar podés hacer por ej. simplemente

~~~
cd src
npx http-server
~~~

Y va a abrir un servidor con tus archivos.
