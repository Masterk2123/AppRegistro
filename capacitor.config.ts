import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AppRegistro',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    CapacitorSQLite:{
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption:false,
      iosKeychainPrefx: 'YOUR_APP_NAME',
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite"
      },
      androidIsEncryption: false,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite",
        biometricSubtitle:"Log in using your biometric"
      },
      electronIsEncryption: false,
      electronWindowsLocation: "C:\\ProgamData\\CapacitorDatabases",
      electronLinuxLocation: "Database"
      }
    }
  };
export default config;
