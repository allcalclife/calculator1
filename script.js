document.addEventListener('DOMContentLoaded', function() {
    const items = [
        {
            title: "Living & Cooking",
            subItems: ["volume for cooking", "weight for cooking", "temperature", "humidity", "atmospheric pressure"],
            imgSrc: "images/cooking.jpeg" // 요리 아이템의 이미지 경로
        },
        {
            title: "Health",
            subItems: ["BMI", "IU(vitamin)", "IV drip velocity"],
            imgSrc: "images/health.jpeg" // 요리 아이템의 이미지 경로
        },
        {
            title: "Dimension",
            subItems: ["length", "area", "volume", "weight", "angle"],
            imgSrc: "images/dimension.jpeg" // 물리 아이템의 이미지 경로
        },
        {
            title: "Motion and Kinematics",
            subItems: ["speed", "acceleration", "angular velocity", "frequency", "time"],
            imgSrc: "images/kinematics.jpeg"
        },
        {
            title: "Mechanics",
            subItems: ["energy", "pressure", "force", "work", "power"],
            imgSrc: "images/mechanics.jpeg"
        },
        {
            title: "Chemistry",
            subItems: ["pH", "concentration", "temperature", "flow rate"],
            imgSrc: "images/chemistry.jpeg" // 화학 아이템의 이미지 경로
        },
        {
            title: "Electricity",
            subItems: ["voltage", "current", "resist", "capacitance", "inductance", "reactance", "power", "energy"],
            imgSrc: "images/electricity.jpeg" // 전기 아이템의 이미지 경로
        },
        {
            title: "Magnetism",
            subItems: ["magnetic field", "magnetic flux", "magnetomotive force", "magnetic reluctance", "magnetization", "magnetic moment", "magnetic flux density", "permeability", "magnetic field strength"],
            imgSrc: "images/magnetism.jpeg" // 자기 아이템의 이미지 경로
        }
    ];

    const contentDiv = document.getElementById('content');

    items.forEach(function(item, index) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.dataset.index = index;

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.classList.add('item-icon');
        itemDiv.appendChild(img);

        const textDiv = document.createElement('div');
        textDiv.classList.add('text-content');

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('title');
        textDiv.appendChild(title);

        const subList = document.createElement('ul');
        subList.classList.add('sub-items');

        item.subItems.forEach(function(subItem) {
            const subItemLi = document.createElement('li');
            subItemLi.classList.add('sub-item');
            subItemLi.textContent = subItem;
            subItemLi.addEventListener('click', function() {
                if (subItem === "temperature") {
                    window.location.href = `temperature.html?unitType=${encodeURIComponent(subItem)}`;
                } else if (subItem === "BMI" || subItem === "IV drip velocity" || subItem === "pH" || subItem === "IU(vitamin)") {
                    window.location.href = `${subItem.toLowerCase().replace(/ /g, '_').replace(/$begin:math:text$.*?$end:math:text$/g, '')}.html?unitType=${encodeURIComponent(subItem)}`;
                } else {
                    window.location.href = `subitem.html?unitType=${encodeURIComponent(subItem)}`;
                }
            });
            subList.appendChild(subItemLi);
        });

        textDiv.appendChild(subList);
        itemDiv.appendChild(textDiv);

        contentDiv.appendChild(itemDiv);
    });
});