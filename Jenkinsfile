pipeline {
    agent any
    
    stages {
        stage('Check Dependencies') {
            steps {
                // Check if node_modules directory exists
                script {
                    if (!fileExists('node_modules')) {
                        // If node_modules doesn't exist, run npm install
                        echo 'node_modules directory does not exist. Running npm install...'
                        sh 'npm install'
                    } else {
                        // If node_modules exists, check if package-lock.json has changed
                        def previousPackageLock = readFileIfExists('package-lock.json')
                        sh 'git checkout HEAD package-lock.json'
                        def currentPackageLock = readFileIfExists('package-lock.json')

                        if (currentPackageLock != previousPackageLock) {
                            echo 'package-lock.json has changed. Running npm install...'
                            sh 'npm install'
                        } else {
                            echo 'No changes in package-lock.json. Skipping npm install...'
                        }
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                // Build Angular project in production mode
                sh 'npm run build -- --prod'
            }
        }
    }
    
    post {
        success {
            // Add deployment steps here (e.g., deploying to a production server)
            echo 'Build successful! Deploying to production...'
            // Example deployment command (replace with your deployment script)
            sh 'scp -r dist/* user@production-server:/path/to/deployment/directory'
        }
        failure {
            echo 'Build failed!'
        }
    }
}

