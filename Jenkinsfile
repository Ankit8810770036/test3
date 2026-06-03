pipeline {
    agent any
    tools { dockerTool 'my-docker' }
    environment { IMAGE = "ankit12321/jenkins-demo-app" }
    
    stages {
        stage('Build') {
            steps {
                script { docker.build("${IMAGE}:${BUILD_NUMBER}") }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    docker.withTool('my-docker') {
                        docker.withRegistry('', 'dockerhub-creds') {
                            docker.image("${IMAGE}:${BUILD_NUMBER}").push()
                            docker.image("${IMAGE}:${BUILD_NUMBER}").push('latest')
                        }
                    }
                }
            }
        }
    }
}
