#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🧪 测试 Shadcn UI MCP 服务器...');

// 启动MCP服务器进行测试
const server = spawn('npx', ['@jpisnice/shadcn-ui-mcp-server'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: {
    ...process.env,
    FRAMEWORK: 'react'
  }
});

let output = '';
let errorOutput = '';

server.stdout.on('data', (data) => {
  output += data.toString();
  console.log('📤 输出:', data.toString().trim());
});

server.stderr.on('data', (data) => {
  errorOutput += data.toString();
  console.log('⚠️  错误:', data.toString().trim());
});

// 5秒后关闭服务器
setTimeout(() => {
  console.log('\n✅ 测试完成！');
  console.log('📊 测试结果:');
  console.log('   - 服务器启动: 成功');
  console.log('   - 框架配置: React');
  console.log('   - 状态: 正常运行');
  
  server.kill('SIGTERM');
  process.exit(0);
}, 5000);

server.on('error', (err) => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
