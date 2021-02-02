npm config set registry https://registry.npm.taobao.org/
npm install -g yarn
yarn config set registry https://registry.npm.taobao.org
echo "node_modules\ndist\ndist-ssr\n*.local" >> .gitignore
cd ./backend && yarn add koa koa-cors
cd ..
cd ./frontend && yarn add vue@next vue-router@4 vuex@next axios && yarn add -D vite@^1.0.0-rc.13 @vue/compiler-sfc @vue/cli-plugin-router @vue/cli-plugin-vuex
rm ../install.sh