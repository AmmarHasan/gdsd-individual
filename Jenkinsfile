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
                sh 'cd client'
                sh 'node --max_old_space_size=4096 npm run build -- --prod'
                sh 'echo "FRONTEND BUILD SUCCESSFULL"'
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
