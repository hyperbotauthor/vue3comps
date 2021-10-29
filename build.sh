if [ "$1" == "hard" ]
then
  echo "deleting dist"
  rm -r dist
fi

echo "building dist"

node_modules/.bin/rollup --config

echo "moving types"

mv dist/index.d.ts dist/index.umd.d.ts

echo "built"

ls dist -l