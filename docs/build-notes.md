# camo-nano-light-wallet

# to auto build a releases

be sure to update package.json to have the same version number!

  git commit -am v1.1.0;
  git tag v1.1.0;
  git push;
  git push --tags;

## to delete release tags
  git push --delete origin v1.1.0;
  git tag -d v1.1.0;
  git pull;
  git push;
