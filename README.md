# Current Weather

## O Projeto.

É uma aplicação que consome dados da API Climática (https://openweathermap.org/api) e exibe as informações baseadas na localização atual do usuário.

## Requisitos:

Requisitos
Para utilizar a Aplicação Climática com Localização, você precisará de:

- Uma conexão com a internet
- Um navegador web compatível (recomendamos o Google Chrome)
- Permissão para compartilhar sua localização com a aplicação

## Utilização:

Para utilizar a Aplicação Climática com Localização, basta seguir os seguintes passos:

1. Abra o navegador e acesse o endereço da aplicação (https://current-weather-api.vercel.app)

2. Na tela inicial, você verá uma mensagem solicitando sua permissão para compartilhar sua localização. Clique em "permitir" para continuar.

3. Logo após a página carregará as informações climáticas da sua localização atual. As informações incluem:

- Temperatura atual
- Condição climática (ensolarado, chuvoso, etc.)
- Umidade
- Velocidade do vento.
- Ao fundo, carregará uma imagem de fundo baseada no nome da sua cidade em uma consulta na API de imagens da unsplash. Caso a consulta não encontre, um fundo azul será exibido no lugar.

## Instalação:

1. Clone o projeto: ( Necessário git instalado em sua máquina)

```
 git clone https://github.com/vmc36/currentWeather.git
```

2. Instale as dependências necessárias:

```
 npm install
```

3. Renomeie o arquivo .envexample para .env, e lá insira sua chave da api da openweathermap.

```
VITE_BASE_URL="insira aqui sua key da api openweathermap"

```

4. inicie a aplicação

```
 npm run dev
```

## Ferramentas Utilizadas.

Os principais serviços são:

- ### [Vite](https://vitejs.dev/)

  Vite (palavra francesa para "rápido") é uma ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos. É um bundler e um dev-server que você consegue usar compiladores e frameworks direto da caixa, com zero configuração.

- ### [React](https://pt-br.reactjs.org/)

  React é uma biblioteca JavaScript para construção de interfaces de usuário. - ( Se você está aqui é porque muito provavelmente conhece esse cara).

- ### [TailwindCss](https://tailwindcss.com/)

  O Tailwind CSS é uma framework utility first projetada para permitir que os usuários criem aplicativos com mais rapidez e facilidade.

- ### Deploy [Vercel](https://vercel.com/)
  A Vercel é uma plataforma voltada para a hospedagem de aplicações de uma forma bem simples e rápida. Como diz seu próprio site “A Vercel é o melhor lugar para implantar qualquer aplicativo de front-end.”

# Suporte

Se você tiver alguma dúvida ou encontrar algum problema ao utilizar a aplicação, entre em contato conosco através do endereço de e-mail viniciusmodesto.dev@gmail.com.
