import re
import sys

print("Iniciando análisis...", file=sys.stderr)

# Leer el archivo
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Archivo leído, tamaño: {len(content)} caracteres", file=sys.stderr)

# Extraer el objeto 'datos'
match_datos = re.search(r'const datos = \{(.*?)\};', content, re.DOTALL)
print(f"Match datos: {match_datos is not None}", file=sys.stderr)
categorias_datos = {}

if match_datos:
    datos_str = '{' + match_datos.group(1) + '}'
    # Procesar las categorías
    categoria_pattern = r'"([^"]+)":\s*\[(.*?)\]'
    for match in re.finditer(categoria_pattern, datos_str, re.DOTALL):
        categoria = match.group(1)
        items_str = match.group(2)
        # Extraer palabras
        items = re.findall(r'"([^"]+)"', items_str)
        categorias_datos[categoria] = items

print('CATEGORÍAS EN DATOS:')
for cat, items in categorias_datos.items():
    print(f'{cat}: {len(items)} palabras')
print()

# Extraer pistasEspecificas
match_pistas = re.search(r'const pistasEspecificas = \{(.*?)\n    \};', content, re.DOTALL)
palabras_con_pistas = set()

if match_pistas:
    pistas_str = match_pistas.group(1)
    
    # Extraer palabras con pistas
    palabra_pattern = r'"([^"]+)":\s*\['
    for match in re.finditer(palabra_pattern, pistas_str):
        palabra = match.group(1)
        palabras_con_pistas.add(palabra)
    
    print(f'TOTAL DE PALABRAS CON PISTAS: {len(palabras_con_pistas)}')
    print()
    
    # Comparar por categoría
    print('=' * 80)
    print('ANÁLISIS POR CATEGORÍA')
    print('=' * 80)
    print()
    
    for categoria, palabras_datos in sorted(categorias_datos.items()):
        print(f'--- CATEGORÍA: {categoria} ---')
        print(f'Total en datos: {len(palabras_datos)}')
        
        # Palabras que están en datos
        palabras_en_datos = set(palabras_datos)
        
        # Palabras de esta categoría que tienen pistas
        palabras_categoria_con_pistas = palabras_en_datos & palabras_con_pistas
        
        # Palabras que FALTAN pistas
        faltan_pistas = palabras_en_datos - palabras_con_pistas
        
        print(f'Con pistas: {len(palabras_categoria_con_pistas)}')
        print(f'Sin pistas: {len(faltan_pistas)}')
        
        if faltan_pistas:
            print('\nPALABRAS SIN PISTAS:')
            for palabra in sorted(faltan_pistas):
                print(f'  - {palabra}')
        
        print()
    
    # Palabras que tienen pistas pero NO están en datos
    todas_palabras_datos = set()
    for palabras in categorias_datos.values():
        todas_palabras_datos.update(palabras)
    
    pistas_sobrantes = palabras_con_pistas - todas_palabras_datos
    
    print('=' * 80)
    print('PALABRAS CON PISTAS QUE NO ESTÁN EN DATOS')
    print('=' * 80)
    print(f'Total: {len(pistas_sobrantes)}')
    if pistas_sobrantes:
        for palabra in sorted(pistas_sobrantes):
            print(f'  - {palabra}')
