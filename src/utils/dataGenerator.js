// utils/dataGenerator.js

// Generador de datos aleatorios para pacientes con ENT
class ENTDataGenerator {
    static generateRandomPatient(formData = {}) { // Agrega parámetro opcional
        const genders = ['Masculino', 'Femenino'];
        const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        const regions = ['Lima', 'Arequipa', 'Cusco', 'Piura', 'La Libertad', 'Junín', 'Cajamarca', 'Puno'];
        const activityLevels = ['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Muy Activo'];
        const diets = ['Poco saludable', 'Regular', 'Saludable', 'Muy saludable'];
        
        const gender = this.randomChoice(genders);
        const age = Math.floor(Math.random() * 60) + 18; // 18-77 años
        const height = this.randomInRange(150, 190); // cm
        const weight = this.randomInRange(45, 120); // kg
        const bmi = Number((weight / ((height / 100) ** 2)).toFixed(1));

        // Usa fullName si se proporciona, sino genera aleatorio
        const fullName = formData.fullName || this.randomFirstName(gender) + ' ' + this.randomLastName();
        const firstName = fullName.split(' ')[0] || this.randomFirstName(gender);
        const lastName = fullName.split(' ').slice(1).join(' ') || this.randomLastName();

        return {
            personalInfo: {
                patientId: this.generatePatientId(),
                nationalId: formData.dni || this.generateDNI(), // Usa dni si se proporciona
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: this.randomBirthDate(age),
                gender: gender,
                age: age,
                bloodType: this.randomChoice(bloodTypes),
                phone: this.generatePhone(),
                email: this.generateEmail(),
                region: this.randomChoice(regions),
                address: this.generateAddress()
            },
            clinicalHistory: {
                height: height,
                weight: weight,
                bmi: bmi,
                bloodPressure: {
                    systolic: this.randomInRange(90, 180),
                    diastolic: this.randomInRange(60, 120)
                },
                cholesterol: {
                    total: this.randomInRange(150, 300),
                    ldl: this.randomInRange(70, 200),
                    hdl: this.randomInRange(30, 80),
                    triglycerides: this.randomInRange(50, 400)
                },
                glucose: {
                    fasting: this.randomInRange(70, 200),
                    postPrandial: this.randomInRange(100, 300),
                    hba1c: Number((this.randomInRange(4, 12) + Math.random()).toFixed(1))
                },
                lifestyle: {
                    smoking: Math.random() > 0.7,
                    alcoholConsumption: Math.random() > 0.6,
                    physicalActivity: this.randomChoice(activityLevels),
                    dietQuality: this.randomChoice(diets),
                    stressLevel: this.randomInRange(1, 10)
                },
                familyHistory: {
                    diabetes: Math.random() > 0.5,
                    hypertension: Math.random() > 0.4,
                    heartDisease: Math.random() > 0.6,
                    stroke: Math.random() > 0.7,
                    cancer: Math.random() > 0.8
                },
                comorbidities: {
                    hypertension: Math.random() > 0.6,
                    diabetes: Math.random() > 0.7,
                    dyslipidemia: Math.random() > 0.5,
                    obesity: bmi > 30,
                    heartDisease: Math.random() > 0.8
                },
                medications: this.generateMedications(),
                allergies: this.generateAllergies(),
                lastCheckup: this.randomRecentDate()
            },
            vitalSigns: {
                heartRate: this.randomInRange(60, 100),
                respiratoryRate: this.randomInRange(12, 20),
                temperature: Number((this.randomInRange(36, 38) + Math.random()).toFixed(1)),
                oxygenSaturation: this.randomInRange(95, 100)
            },
            labResults: {
                creatinine: Number((this.randomInRange(0.5, 1.5) + Math.random()).toFixed(2)),
                alt: this.randomInRange(10, 40),
                ast: this.randomInRange(10, 35),
                hemoglobin: this.randomInRange(12, 18),
                wbc: this.randomInRange(4000, 11000),
                platelets: this.randomInRange(150000, 450000)
            },
            timestamps: {
                registeredAt: new Date().toISOString(),
                lastUpdated: new Date().toISOString(),
                nextAppointment: this.randomFutureDate()
            }
        };
    }

    static generatePatientId() {
        return 'PAT' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    static generateDNI() {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    static randomFirstName(gender) {
        const maleNames = ['Juan', 'Carlos', 'Luis', 'Miguel', 'José', 'Pedro', 'Fernando', 'Ricardo', 'Jorge', 'Diego'];
        const femaleNames = ['María', 'Ana', 'Rosa', 'Carmen', 'Lucía', 'Elena', 'Patricia', 'Sandra', 'Claudia', 'Daniela'];
        const names = gender === 'Masculino' ? maleNames : femaleNames;
        return this.randomChoice(names);
    }

    static randomLastName() {
        const lastNames = ['García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Díaz'];
        return this.randomChoice(lastNames) + ' ' + this.randomChoice(lastNames);
    }

    static generatePhone() {
        return '9' + Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    static generateEmail() {
        const domains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'icloud.com'];
        const name = Math.random().toString(36).substr(2, 8);
        return name + '@' + this.randomChoice(domains);
    }

    static generateAddress() {
        const streets = ['Av. Arenales', 'Jr. Junín', 'Av. Brasil', 'Calle Los Olivos', 'Av. La Marina', 'Jr. Cusco'];
        const numbers = Math.floor(Math.random() * 2000) + 1;
        return `${this.randomChoice(streets)} ${numbers}, Lima, Perú`;
    }

    static generateMedications() {
        const medications = [
            'Metformina 500mg',
            'Losartán 50mg',
            'Atorvastatina 20mg',
            'Aspirina 100mg',
            'Metoprolol 50mg',
            'Insulina Glargina',
            'Omeprazol 20mg',
            'None'
        ];
        return [this.randomChoice(medications)].filter(med => med !== 'None');
    }

    static generateAllergies() {
        const allergies = [
            'Penicilina',
            'Sulfas',
            'Ibuprofeno',
            'Mariscos',
            'Polvo',
            'Gramíneas',
            'None'
        ];
        return [this.randomChoice(allergies)].filter(allergy => allergy !== 'None');
    }

    static randomBirthDate(age) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const birthMonth = Math.floor(Math.random() * 12);
        const birthDay = Math.floor(Math.random() * 28) + 1;
        return new Date(birthYear, birthMonth, birthDay).toISOString().split('T')[0];
    }

    static randomRecentDate() {
        const daysAgo = Math.floor(Math.random() * 90); // Últimos 90 días
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toISOString().split('T')[0];
    }

    static randomFutureDate() {
        const daysFuture = Math.floor(Math.random() * 180) + 30; // Próximos 30-210 días
        const date = new Date();
        date.setDate(date.getDate() + daysFuture);
        return date.toISOString().split('T')[0];
    }

    static randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Simulación del registro y obtención de datos
class ENTPlatformFrontend {
    constructor() {
        this.currentPatient = null;
        this.isRegistered = false;
    }

    // Simulación del proceso de registro
    async registerPatient(formData) { // Cambia para aceptar formData
        console.log('📝 Registrando paciente...', formData);
        
        // Simular llamada a API
        await this.simulateAPICall(1500);
        
        // Generar datos completos del paciente
        this.currentPatient = ENTDataGenerator.generateRandomPatient(formData); // Pasa formData
        this.isRegistered = true;
        
        console.log('✅ Paciente registrado exitosamente');
        console.log('📊 Datos generados:', this.currentPatient);
        
        return {
            success: true,
            message: 'Paciente registrado exitosamente',
            patientId: this.currentPatient.personalInfo.patientId,
            data: this.currentPatient
        };
    }

    // Obtener datos del paciente (simulando API)
    async getPatientData(patientId) {
        if (!this.isRegistered) {
            throw new Error('Paciente no registrado');
        }

        await this.simulateAPICall(800);
        
        return {
            success: true,
            data: this.currentPatient
        };
    }

    // Simular predicción de riesgos
    async predictRisks(patientId) {
        if (!this.isRegistered) {
            throw new Error('Paciente no registrado');
        }

        await this.simulateAPICall(2000);
        
        return this.generateRiskPrediction();
    }

    // Generar predicción de riesgos aleatoria
    generateRiskPrediction() {
        const risks = ['diabetes', 'hypertension', 'cardiovascular', 'obesity', 'kidney_disease'];
        const prediction = {};

        risks.forEach(risk => {
            const probability = Number((Math.random() * 100).toFixed(1));
            let level = 'Bajo';
            
            if (probability > 70) level = 'Alto';
            else if (probability > 40) level = 'Moderado';

            prediction[risk] = {
                probability: probability,
                level: level,
                factors: this.generateRiskFactors(risk),
                recommendations: this.generateRecommendations(risk, level)
            };
        });

        return {
            success: true,
            timestamp: new Date().toISOString(),
            predictions: prediction,
            overallRisk: this.calculateOverallRisk(prediction)
        };
    }

    generateRiskFactors(riskType) {
        const factors = {
            diabetes: ['Glucosa elevada', 'Historial familiar', 'Sobrepeso', 'Sedentarismo'],
            hypertension: ['Presión arterial alta', 'Consumo de sal', 'Estrés', 'Edad'],
            cardiovascular: ['Colesterol LDL alto', 'Tabaquismo', 'Hipertensión', 'Diabetes'],
            obesity: ['IMC elevado', 'Dieta alta en calorías', 'Metabolismo lento'],
            kidney_disease: ['Creatinina elevada', 'Diabetes no controlada', 'Hipertensión']
        };
        
        return factors[riskType].slice(0, Math.floor(Math.random() * 3) + 1);
    }

    generateRecommendations(riskType, level) {
        const baseRecommendations = {
            low: ['Mantener estilo de vida saludable', 'Controles anuales'],
            moderate: ['Mejorar dieta', 'Aumentar actividad física', 'Control trimestral'],
            high: ['Consulta especializada urgente', 'Cambios drásticos en estilo de vida', 'Monitoreo constante']
        };

        const specificRecs = {
            diabetes: ['Control glucosa', 'Dieta baja en azúcares'],
            hypertension: ['Reducir sal', 'Monitoreo presión'],
            cardiovascular: ['Ejercicio aeróbico', 'Dieta cardiosaludable'],
            obesity: ['Plan alimenticio', 'Ejercicio regular'],
            kidney_disease: ['Hidratación adecuada', 'Control proteínas']
        };

        return [
            ...baseRecommendations[level === 'Alto' ? 'high' : level === 'Moderado' ? 'moderate' : 'low'],
            ...specificRecs[riskType]
        ];
    }

    calculateOverallRisk(predictions) {
        const scores = Object.values(predictions).map(p => p.probability);
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        
        if (average > 70) return 'Alto';
        if (average > 40) return 'Moderado';
        return 'Bajo';
    }

    // Simular llamada a API
    simulateAPICall(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }
}

// Exportar para uso en el frontend
export const ENTPlatform = new ENTPlatformFrontend(); // Cambiado: ahora es una exportación ES6