from flask import Flask, jsonify, request

app = Flask(__name__)

# Ejemplo de tasas de cambio (deberías actualizar esto desde una API real)
tasas_cambio = {
    'eur': 0.85,  # Euro
    'gbp': 0.75,  # Libra esterlina
    'jpy': 110,    # Yen japonés
    'cop': 4200    # Pesp colombiano

}

@app.route('/convertir', methods=['GET'])
def convertir_moneda():
    monto = float(request.args.get('monto'))
    moneda = request.args.get('moneda')
    tasa = tasas_cambio.get(moneda, 1)  # Si la moneda no está, se utiliza 1 como tasa por defecto
    monto_convertido = monto * tasa
    return jsonify({'monto_convertido': monto_convertido})

if __name__ == '__main__':
    app.run(debug=True)
