// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化应用');
    // 初始化应用
    initApp();
});

function initApp() {
    console.log('开始初始化应用组件');
    
    // 初始化组件
    initHeader();
    initSidebar();
    initTabNavigation();
    initDocumentCards();
    
    // 添加触控优化
    addTouchOptimizations();
    
    // 添加响应式处理
    addResponsiveHandlers();
    
    console.log('应用初始化完成');
}

// 头部导航功能
function initHeader() {
    const backBtn = document.querySelector('.back-btn');
    const settingsBtn = document.querySelector('.settings-btn');
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // 返回上一页逻辑
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // 如果没有历史记录，可以跳转到首页
                console.log('返回首页');
            }
        });
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            // 打开设置页面
            console.log('打开设置');
        });
    }
}

// 侧边栏功能
function initSidebar() {
    const addUserBtn = document.querySelector('.add-user-btn');
    
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            // 添加用户功能
            console.log('添加用户');
        });
    }
}

// 标签页导航功能
function initTabNavigation() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPages = document.querySelectorAll('.tab-page');
    
    console.log('找到标签页:', tabItems.length);
    console.log('找到页面:', tabPages.length);
    
    // 确保至少有一个标签页
    if (tabItems.length === 0) {
        console.error('没有找到标签页元素');
        return;
    }
    
    tabItems.forEach((tab, index) => {
        console.log('设置标签页事件监听器:', index, tab.textContent);
        
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('点击标签页:', this.textContent, '索引:', index);
            
            // 移除所有标签的激活状态
            tabItems.forEach(item => {
                item.classList.remove('active');
                console.log('移除标签激活状态:', item.textContent);
            });
            
            tabPages.forEach(page => {
                page.classList.remove('active');
                console.log('移除页面激活状态:', page.id);
            });
            
            // 添加当前标签的激活状态
            this.classList.add('active');
            console.log('添加标签激活状态:', this.textContent);
            
            if (tabPages[index]) {
                tabPages[index].classList.add('active');
                console.log('激活页面:', tabPages[index].id);
            } else {
                console.error('页面不存在，索引:', index, '总页面数:', tabPages.length);
            }
        });
    });
}

// 功能卡片功能
function initDocumentCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // 卡片点击效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 处理卡片点击逻辑
            const cardTitle = this.querySelector('.card-title');
            if (cardTitle) {
                console.log('点击了功能卡片:', cardTitle.textContent);
                // 这里可以打开相应的功能页面或弹窗
                utils.showToast(`进入${cardTitle.textContent}功能`, 'info');
            }
        });
    });
}

// 触控优化
function addTouchOptimizations() {
    // 为所有可点击元素添加触控反馈
    const clickableElements = document.querySelectorAll('.btn, .doc-card, .feature-card, .status-card, .tab-item, .banner-btn, .add-user-btn');
    
    clickableElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.8';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.opacity = '';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.opacity = '';
        });
    });
}

// 响应式处理
function addResponsiveHandlers() {
    // 监听窗口大小变化
    window.addEventListener('resize', debounce(function() {
        adjustLayoutForScreen();
    }, 250));
    
    // 初始调整
    adjustLayoutForScreen();
}

// 根据屏幕尺寸调整布局
function adjustLayoutForScreen() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // 小度智能屏适配
    if (screenWidth >= 1024 && screenWidth <= 1280 && screenHeight <= 800) {
        document.body.classList.add('xiaodu-screen');
        
        // 调整字体大小
        const root = document.documentElement;
        root.style.fontSize = '14px';
        
        // 调整卡片间距
        const dataSections = document.querySelectorAll('.data-section');
        dataSections.forEach(section => {
            section.style.marginBottom = '12px';
        });
    } else {
        document.body.classList.remove('xiaodu-screen');
        document.documentElement.style.fontSize = '';
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数
const utils = {
    // 格式化数字
    formatNumber: function(num) {
        if (num === null || num === undefined || num === '--') {
            return '--';
        }
        return num.toLocaleString();
    },
    
    // 格式化百分比
    formatPercentage: function(num) {
        if (num === null || num === undefined || num === '--') {
            return '--';
        }
        return num + '%';
    },
    
    // 显示加载状态
    showLoading: function(element) {
        if (element) {
            element.innerHTML = '<div class="loading"><div class="loading-spinner"></div>加载中...</div>';
        }
    },
    
    // 隐藏加载状态
    hideLoading: function(element, content) {
        if (element) {
            element.innerHTML = content || '--';
        }
    },
    
    // 显示提示信息
    showToast: function(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#ff4d4f' : type === 'success' ? '#52c41a' : '#1890ff'};
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            z-index: 1000;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // 显示动画
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // 自动隐藏
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
};

// 导出工具函数到全局
window.utils = utils;
