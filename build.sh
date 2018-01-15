# 编译发布

cd dist
git checkout gh-pages -f
git reset --hard
cd ../
npm run prod
cd dist
git add .
git commit -m 'update'
git push --set-upstream origin gh-pages
cd ..