pipeline {
    environment {
		registry = "vilasshetkar/test"
		registryCredential = 'dockerhub_vilasshetkar'
		dockerImage = ''
	}
	agent any
	stages {
	
		stage('01 Cloning our Git') {
			steps {
				git branch: 'main', url: 'https://github.com/vilasshetkar/react-tasks.git'
			}
		}
		
		stage('02 Building our image') {
			steps{
				script {
					dockerImage = docker.build registry + ":$BUILD_NUMBER"
				}
			}
		}

		stage('03 Push image to Dockerhub') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
						dockerImage.push()
					}
				}
			}
		}

		stage('04 Start Docker Container') {
			steps{
				sh "docker run -dp 80:80 $registry:$BUILD_NUMBER"
			}
		}
	}
}
