# React. 4. Формы



## Задача №1
### Действия по выполнению кода:

#### В файле app.js создал компонент App, который возвращает разметку с заголовком и компонентом Task1, который импортируется из файла Tasks/Task1.js.

#### В файле Tasks/Task1.js создал компонент Task1, который принимает функцию onSubmit в качестве пропса. Эта функция будет вызываться при отправке формы регистрации или входа, которые импортируются из файла components/index.js. Компонент Task1 возвращает разметку с двумя формами: Signin и Signup.

#### В файле components/index.js экспортирую компоненты Signin и Signup, которые импортируются из файлов Signin.js и Signup.js соответственно. Также экспортирую компоненты CustomInput, Button, CustomSelect и IconAt, которые используются в формах.

#### В файле Signin.js создаю компонент Signin, который принимает функцию onSubmit в качестве пропса. Эта функция будет вызываться при отправке формы входа с параметрами email и password. Компонент Signin использует хуки useState и useRef для управления состоянием и ссылками на поля ввода. Компонент Signin также позволяет пользователю настраивать некоторые свойства полей ввода, такие как placeholder, label, description, error, variant, radius, size, disabled и asterisk. Компонент Signin возвращает разметку с формой, которая содержит два поля ввода типа email и password и кнопку отправки. Компонент Signin также возвращает разметку с формой, которая позволяет пользователю изменять свойства полей ввода с помощью других полей ввода и выбора.

#### В файле Signup.js создаю компонент Signup, который принимает функцию onSubmit в качестве пропса. Эта функция будет вызываться при отправке формы регистрации с параметрами name, nickname, email, gender, password и confirmPassword. Компонент Signup использует хуки useState и useRef для управления состоянием и ссылками на поля ввода. Компонент Signup также позволяет пользователю настраивать некоторые свойства полей ввода, такие как placeholder, label, description, error, variant, radius, size, disabled и asterisk. Компонент Signup возвращает разметку с формой, которая содержит шесть полей ввода типа text, email, radio, password и кнопку отправки. Компонент Signup также возвращает разметку с формой, которая позволяет пользователю изменять свойства полей ввода с помощью других полей ввода и выбора. Компонент Signup также добавляет иконку собаки к полю ввода nickname с помощью свойства sobaka, которое принимает функцию IconAt, возвращающую изображение собаки, импортированное из файла assets/sobaka.jpg.

#### В файле CustomInput.js создаю компонент CustomInput, который использует хук forwardRef для передачи ссылки на поле ввода. Компонент CustomInput принимает различные свойства, такие как className, label, required, type, id, name, placeholder, value, description, error, variant, radius, size, disabled, onChange, icon и sobaka. Компонент CustomInput возвращает разметку с элементом div, который содержит элементы label, span и input. Компонент CustomInput также применяет различные стили в зависимости от свойств error и variant. Компонент CustomInput также добавляет звездочку к метке, если свойство required имеет значение true. Компонент CustomInput также добавляет фоновое изображение к полю ввода, если свойство sobaka имеет значение, и устанавливает некоторые свойства стиля, такие как borderRadius, fontSize, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, paddingLeft, transform, marginLeft и marginRight.

#### В файле button.js создаю компонент Button, который принимает свойства title, onClick, disabled и children. Компонент Button возвращает разметку с элементом button, который содержит текст title или children. Компонент Button также применяет стиль styles.btn к кнопке.
