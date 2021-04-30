set -ex

echo "Testing server"

cd server
yarn test
cd ..


# echo "Testing web client"

# cd clients/web
# yarn test
# cd ..
# cd ..
