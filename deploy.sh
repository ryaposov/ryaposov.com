npm run build
mv "$(pwd)/package.json" "$(pwd)/package.json.backup"
sed -n '/"@ryaposov/!p' "$(pwd)/package.json.backup" > "$(pwd)/package.json"
gcloud app deploy --project ryaposov
rm "$(pwd)/package.json"
mv "$(pwd)/package.json.backup" "$(pwd)/package.json"
