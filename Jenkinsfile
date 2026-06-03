pipeline {
    agent any

    tools {
        dockerTool 'my-docker'
    }

    environment {
        // Replace this with your actual Docker Hub username
        IMAGE_NAME = "ankit12321/jenkins-demo-app"
        TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building the Docker Image..."
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Logging into Docker Hub and pushing image..."
                    // Make sure 'dockerhub-creds' exists in your Jenkins credentials
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
                        docker.image("${IMAGE_NAME}:${TAG}").push()
                        docker.image("${IMAGE_NAME}:${TAG}").push('latest')
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline finished successfully! Image pushed to Docker Hub."
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
