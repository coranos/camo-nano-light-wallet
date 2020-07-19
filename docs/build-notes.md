# camo-nano-light-wallet

    macOS:
    openssl dgst -sha256 [App.dmg]

    Windows:
    certUtil -hashfile "[App.exe]" SHA256

    Linux AppImage:
    sha256sum [App.AppImage]

# to download using wget

    wget https://github.com/coranos/camo-nano-light-wallet/releases/download/[release]/[App.exe]

# alternate site

    wget https://coranos.cc/[App.exe]

# To build a release:

    npm run dist-mac;
    npm run dist-win;
    npm run dist-linux;

# to auto build a releases

  git commit -am v1.0.2;
  git tag v1.0.2;
  git push;
  git push --tags;
## to delete release tags
  git push --delete origin v1.0.2;
  git tag -d v1.0.2;
  git pull;
  git push;
