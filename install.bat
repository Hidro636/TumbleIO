mkdir %USERPROFILE%\Desktop\Downloads
bitsadmin /transfer "DownloadMeteor" "https://install.meteor.com/windows" "%USERPROFILE%\Desktop\Downloads\meteor.exe"
cd %USERPROFILE%\Desktop\Downloads
start meteor.exe
bitsadmin /transfer "DownloadGit" "https://github-windows.s3.amazonaws.com/GitHubSetup.exe" "%USERPROFILE%\Desktop\Downloads\git.exe"
start git.exe
bitsadmin /transfer "DownloadWeb" "https://download.jetbrains.com/webstorm/WebStorm-2016.2.3.exe" "%USERPROFILE%\Desktop\Downloads\webstorm.exe"
start webstorm.exe
