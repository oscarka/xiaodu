#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🚀 启动 Shadcn UI MCP 服务器...');

// 启动MCP服务器
const server = spawn('npx', ['@jpisnice/shadcn-ui-mcp-server'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    FRAMEWORK: 'react' // 使用React框架
  }
});

server.on('error', (err) => {
  console.error('❌ 服务器启动失败:', err);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`📡 服务器已关闭，退出码: ${code}`);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭服务器...');
  server.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 正在关闭服务器...');
  server.kill('SIGTERM');
});

console.log('✅ 服务器已启动！');
console.log('📋 服务器信息:');
console.log('   - 框架: React');
console.log('   - 传输: stdio');
console.log('   - 状态: 运行中');
console.log('\n💡 提示: 按 Ctrl+C 停止服务器');
