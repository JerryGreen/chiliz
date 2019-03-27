rm -rf build
rm getChilizVkLikes.zip
mkdir build
cp index.js ./build/
cp -a node_modules ./build/
cd build
zip -r ./../getChilizVkLikes.zip .
