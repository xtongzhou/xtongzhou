document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM 元素获取 ----
    const entryView = document.getElementById('entry-view');
    const mapView = document.getElementById('map-view');
    const btnEnterGame = document.getElementById('btn-enter-game');
    const playerChar = document.getElementById('player-char');
    const mapContainer = document.getElementById('map-container');
    const gameStatus = document.getElementById('game-status');
    const zoneCards = document.querySelectorAll('.zone-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const easterEggs = document.querySelectorAll('.easter-egg');

    let isMoving = false; // 锁定状态，防止移动中重复点击

    // ---- 初始化设定 ----
    
    // 初始化角色位置在页面底部中间
    function initPlayerPosition() {
        if (!mapView.classList.contains('hidden')) return; // 只在入口页初始化
        // 设为一个比较中间偏下的起始点，实际上不需要太精确，我们使用绝对居中的 transform
        playerChar.style.transform = `translate(calc(50vw - 30px), calc(100vh - 60px))`;
    }
    initPlayerPosition();

    // ---- 场景切换逻辑 ----
    btnEnterGame.addEventListener('click', () => {
        // 隐藏入口视图
        entryView.classList.remove('active');
        entryView.classList.add('hidden');
        
        // 显示地图视图
        setTimeout(() => {
            mapView.classList.remove('hidden');
            mapView.classList.add('active');
            
            // 地图显示出来后，让角色走到屏幕中央偏下的一个起始位置
            setTimeout(() => {
                const mapRect = mapContainer.getBoundingClientRect();
                const startX = mapRect.width / 2;
                const startY = mapRect.height - 100;
                movePlayerTo(startX, startY);
            }, 100);
            
        }, 500); // 等待淡出动画
    });

    // ---- 角色移动逻辑 ----
    function movePlayerTo(x, y, callback) {
        // 注意：角色的 transform translate 坐标是以左上角 (0,0) 开始算的
        // x, y 传入的是盒子的中心坐标，所以要减去角色一半的宽高 (30px)
        const charRadius = 30; 
        const targetX = x - charRadius;
        const targetY = y - charRadius;

        playerChar.style.transform = `translate(${targetX}px, ${targetY}px)`;
        
        // 移动结束后执行回调
        if (callback) {
            // transition: transform 0.6s
            setTimeout(callback, 650); 
        }
    }

    // ---- 地图区域点击交互 ----
    zoneCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (isMoving) return; // 移动中禁止点击
            
            isMoving = true;
            const zoneType = card.getAttribute('data-zone');
            const zoneName = card.querySelector('.zone-name').innerText;
            const zoneIcon = card.querySelector('.zone-icon').innerText;
            
            // 更新状态栏
            gameStatus.innerText = `状态：前往 [${zoneName}]`;

            // 获取卡片相对于 mapContainer 的中心坐标
            const mapRect = mapContainer.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            
            // 计算中心点坐标相对于 mapContainer 内部
            // 需要考虑卡片本身的宽高以及它在地图中的位置
            const targetX = cardRect.left - mapRect.left + cardRect.width / 2;
            const targetY = cardRect.top - mapRect.top + cardRect.height / 2;

            // 移动角色
            movePlayerTo(targetX, targetY, () => {
                // 移动到达后的表现
                playerChar.style.animation = 'bounce 0.5s ease-in-out';
                setTimeout(() => { playerChar.style.animation = ''; }, 500);
                
                gameStatus.innerText = `状态：停在 [${zoneName}]`;
                
                // 打开弹窗
                openModal(zoneType, zoneIcon, zoneName);
                isMoving = false;
            });
        });
    });

    // ---- 弹窗逻辑 ----
    function openModal(zoneType, icon, name) {
        modalTitle.innerText = `${icon} ${name}`;
        
        // 从 template 中获取对应的内容并注入
        const tpl = document.getElementById(`tpl-${zoneType}`);
        if(tpl) {
            modalBody.innerHTML = tpl.innerHTML;
        } else {
            modalBody.innerHTML = '<p>内容还在加载中...</p>';
        }

        modalOverlay.classList.remove('hidden');
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
        gameStatus.innerText = '状态：探索中';
    }

    btnCloseModal.addEventListener('click', closeModal);
    
    // 点击遮罩层也可以关闭
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // 按下 ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModal();
        }
    });

    // ---- 彩蛋逻辑 ----
    easterEggs.forEach(egg => {
        egg.addEventListener('click', () => {
            const msg = egg.getAttribute('data-msg');
            alert(msg);
        });
    });
});
