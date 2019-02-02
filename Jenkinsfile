pipeline {
    agent any
    environment {
       NODE_ENV = "production"
    }
    stages {
        stage ('install-dependencies') {
            steps {
              sh 'npm install'
              sh 'cd client && npm install'
            }
        }

        stage ('build-frontend'){
            steps {
                sh 'cd client && npm i && npm install @angular-devkit/build-angular@~0.6.1 && ls node_modules && npm run build -- --prod && echo "FRONTEND BUILD SUCCESSFULL"'
            }
        }

        stage ('test-frontend'){
            steps {
                sh 'cd client && npm run test'
                sh 'cd client && npm run e2e'
            }
        }
    }
}
