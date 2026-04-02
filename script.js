
document.addEventListener('DOMContentLoaded', () => {
    const entryView = document.getElementById('entry-view');
    const mapView = document.getElementById('map-view');
    const btnEnterGame = document.getElementById('btn-enter-game');
    const btnReturnEntry = document.getElementById('btn-return-entry');
    
    // Skill Map Modals
    const landmarkNodes = document.querySelectorAll('.landmark-node');
    const skillModal = document.getElementById('skill-modal');
    const btnCloseSkill = document.getElementById('btn-close-skill');
    const modalSkillTitle = document.getElementById('modal-skill-title');
    const modalSkillBody = document.getElementById('modal-skill-body');

    // Transitions
    if (btnEnterGame) {
        btnEnterGame.addEventListener('click', () => {
            entryView.classList.remove('active');
            entryView.classList.add('hidden');
            setTimeout(() => {
                mapView.classList.remove('hidden');
                mapView.classList.add('active');
            }, 50); 
        });
    }

    if (btnReturnEntry) {
        btnReturnEntry.addEventListener('click', () => {
            mapView.classList.remove('active');
            mapView.classList.add('hidden');
            setTimeout(() => {
                entryView.classList.remove('hidden');
                entryView.classList.add('active');
            }, 50);
        });
    }

    // Interactive Nodes
    landmarkNodes.forEach(node => {
        node.addEventListener('click', () => {
            const zone = node.getAttribute('data-zone');
            let iconText = '';
            let titleText = '';
            const h3 = node.querySelector('h3');
            if (h3) titleText = h3.innerText;
            
            const iconSpan = node.querySelector('.material-symbols-outlined');
            if (iconSpan) iconText = iconSpan.innerText;

            modalSkillTitle.innerHTML = `<span class="material-symbols-outlined">${iconText}</span> ${titleText}`;
            
            const tpl = document.getElementById(`tpl-${zone}`);
            if (tpl) {
                modalSkillBody.innerHTML = tpl.innerHTML;
            } else {
                modalSkillBody.innerHTML = '<p class="text-on-surface">Data Not Found.</p>';
            }

            skillModal.classList.remove('hidden');
        });
    });

    if (btnCloseSkill) {
        btnCloseSkill.addEventListener('click', () => {
            skillModal.classList.add('hidden');
        });
    }

    if (skillModal) {
        skillModal.addEventListener('click', (e) => {
            if (e.target === skillModal) {
                skillModal.classList.add('hidden');
            }
        });
    }
});
