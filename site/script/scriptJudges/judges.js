  document.addEventListener('DOMContentLoaded', function() {
            // Добавление новой строки
            document.getElementById('addRowBtn').addEventListener('click', function() {
                const tableBody = document.querySelector('.main-judges_table .judges-table tbody');
                const newRow = document.createElement('tr');
                
                // Примерные данные для новой строки
                const surnames = ['Козлов', 'Лебедева', 'Соловьев', 'Волкова', 'Зайцев'];
                const names = ['Андрей', 'Татьяна', 'Максим', 'Светлана', 'Артем'];
                const patronymics = ['Иванович', 'Сергеевна', 'Дмитриевич', 'Александровна', 'Владимирович'];
                const regions = ['Республика Башкортостан', 'Пермский край', 'Воронежская область', 'Иркутская область', 'Волгоградская область'];
                const cities = ['Уфа', 'Пермь', 'Воронеж', 'Иркутск', 'Волгоград'];
                const categories = ['category-1', 'category-2', 'category-3', 'category-4', 'category-5'];
                const categoryNames = ['Первая категория', 'Вторая категория', 'Третья категория', 'Четвертая категория', 'Пятая категория'];
                
                const randomIndex = Math.floor(Math.random() * 5);
                
                newRow.innerHTML = `
                    <td>${surnames[randomIndex]} ${names[randomIndex]} ${patronymics[randomIndex]}</td>
                    <td>${regions[randomIndex]}</td>
                    <td>${cities[randomIndex]}</td>
                    <td><span class="category-badge ${categories[randomIndex]}">${categoryNames[randomIndex]}</span></td>
                `;
                
                tableBody.appendChild(newRow);
                
                // Обновляем счетчик записей
                const recordCount = tableBody.children.length;
                document.querySelector('.main-judges_table .stat-item:nth-child(2) span').textContent = `Записей: ${recordCount}`;
            });
            
            // Выделение судей первой категории
            document.getElementById('highlightBtn').addEventListener('click', function() {
                const rows = document.querySelectorAll('.main-judges_table .judges-table tbody tr');
                
                rows.forEach(row => {
                    const categoryCell = row.querySelector('.category-badge');
                    if (categoryCell && categoryCell.classList.contains('category-1')) {
                        row.style.backgroundColor = '#e8f5e9';
                        row.style.fontWeight = '600';
                    }
                });
            });
            
            // Сброс выделения
            document.getElementById('resetBtn').addEventListener('click', function() {
                const rows = document.querySelectorAll('.main-judges_table .judges-table tbody tr');
                
                rows.forEach((row, index) => {
                    row.style.backgroundColor = '';
                    row.style.fontWeight = '';
                });
            });
        });