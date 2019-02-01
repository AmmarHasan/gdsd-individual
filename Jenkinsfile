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
                sh 'npm install -g @angular/cli@6.0.8'
                sh 'node --max_old_space_size=4096 ng build --prod'
                sh 'echo "FRONTEND BUILD SUCCESSFULL"'
            }
        }
        stage ('test-frontend'){
            steps {
                sh 'cd client && ng test'
                sh 'cd client && ng e2e'
            }
        }
    }
}
