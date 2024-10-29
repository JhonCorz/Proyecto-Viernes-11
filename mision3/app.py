from flask import Flask, jsonify, send_file
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return send_file('index.html')  # Sirve index.html desde la carpeta actual

@app.route('/generar_datos', methods=['GET'])
def generar_datos():
    df = pd.read_csv('services_data_webstore.csv')
    labels = df['Order ID'].tolist()  # Etiquetas para el eje x

    # Crear un diccionario con diferentes conjuntos de datos
    data = {
        'precio': df['Total Price'].tolist(),  # Valores para precio total
        'horas': df['Hours of Work'].tolist(),  # Valores para horas de trabajo
        'tarifa_hora': df['Hourly Rate'].tolist()  # Valores para tarifa por hora
    }
    
    return jsonify({'labels': labels, 'data': data})

if __name__ == '__main__':
    app.run(debug=True)
