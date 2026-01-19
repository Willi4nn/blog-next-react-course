// Script para configurar o banco de dados antes do build
const { execSync } = require('child_process');
const { existsSync } = require('fs');
const { resolve } = require('path');

const dbPath = resolve(process.cwd(), './db.sqlite3');
const dbExists = existsSync(dbPath);

console.log('\n🔍 Verificando banco de dados...\n');

if (!dbExists) {
  console.log('📦 Banco de dados não encontrado. Criando...\n');
}

try {
  console.log('🔧 Executando migrations...\n');
  execSync('npm run migrate', { stdio: 'inherit' });

  console.log('\n🌱 Populando banco de dados...\n');
  execSync('npm run seed', { stdio: 'inherit' });

  console.log('\n✅ Banco de dados configurado com sucesso!\n');
} catch (error) {
  console.error('\n❌ Erro ao configurar banco de dados:\n', error.message);
  process.exit(1);
}
