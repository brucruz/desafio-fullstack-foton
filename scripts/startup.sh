set -ex

echo "Configuring web client"

cd clients/web
yarn
cp .env.development.local.example .env.development.local
cd ..
cd ..


echo "Configuring server"

cd server
yarn
cp .env.example .env
cd ..
