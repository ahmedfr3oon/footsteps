// تهيئة مكتبة AOS للرسوم المتحركة
AOS.init({
    duration: 1000,
    once: true
});

// محاكاة توليد الطاقة
const simulateButton = document.getElementById('simulateButton');
const meterFill = document.getElementById('meterFill');
let isSimulating = false;

simulateButton.addEventListener('click', () => {
    if (!isSimulating) {
        isSimulating = true;
        let progress = 0;
        
        const simulationInterval = setInterval(() => {
            progress += Math.random() * 2;
            meterFill.style.width = `${Math.min(progress, 100)}%`;
            
            if (progress >= 100) {
                clearInterval(simulationInterval);
                isSimulating = false;
            }
        }, 50);
    }
});

// تأثيرات التنقل
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-3px)';
        link.style.boxShadow = '8px 8px 15px #d9d9d9, -8px -8px 15px #ffffff';
    });
    
    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
        link.style.boxShadow = '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff';
    });
});