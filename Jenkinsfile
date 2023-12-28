pipeline {
    agent any
    stages {
        
		stage('Preparation') {
		    steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/anantshindalkar/react-tasks.git'
		    }
       }
        stage('Build') {
            steps {
                sh'npm install'
                sh'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
