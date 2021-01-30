FROM node:14.15.4-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
# Npm
RUN npm config set registry https://registry.npm.taobao.org/ && \
   npm i 
# Yarn
# RUN yarn config set registry https://registry.npm.taobao.org && \
#     yarn global add @tarojs/cli && \
#     yarn
# 执行构建
# CMD ["sh", "build.sh"]
CMD ["npm", "run", "build"]
# CMD ["yarn", "build"]