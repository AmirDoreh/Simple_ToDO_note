
The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Auth. To generate a certificate run cd android && ./gradlew signingReport and copy the SHA1 from the debug key. This generates two variant keys. You can copy the 'SHA1' that belongs to the debugAndroidTest variant key option.

cd android && ./gradlew signingReport



cd android && ./gradlew assembleRelease --warning-mode all -> Export APK
cd android && ./gradlew bundleRelease --warning-mode all -> Export AAB


keytool -exportcert -alias YOUR_RELEASE_KEY_ALIAS -keystore YOUR_RELEASE_KEY_PATH | openssl sha1 -binary | openssl base64


Facebook Login Test Users:
note_cdwznmc_alejifcgichhj@tfbnw.net - note2020
note_qdhsazr_chengwitz@tfbnw.net	 - note2020


npx react-native-fix-image
npx patch-package react-native
npx react-codemod rename-unsafe-lifecycles
