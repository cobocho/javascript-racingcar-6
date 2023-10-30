# 🚀 기능 요구 사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

```
예시) [ERROR] 숫자가 잘못된 형식입니다.
```

# 🛠️ 구조 설계

## Controller

- Controller

## Domain

- Car
- User
- Track

## Service

- RacingService

## View

- InputView
- OutputView

# 📦 객체별 역할

## Controller

**Controller**

- 프로그램의 전체 진행과 종료를 담당한다.
- 유저의 입력을 담당한다.
- Service 레이어와 View를 중개한다.

## Domain

**Car**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>distance</td>
    <td>`Car`의 이동거리입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>move(power)</td>
    <td>`distance`에 `power`에 따라 `distance`를 추가합니다.</td>
  </tr>
</table>

**User**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>name</td>
    <td>`User`의 이름입니다.</td>
  </tr>
  <tr>
    <td>car</td>
    <td>`User`가 소유한 `Car` 인스턴스입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>accelerate()</td>
    <td>난수를 기반으로 `car`를 `move` 합니다.</td>
  </tr>
</table>

**Track**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>users</td>
    <td>경기에 참여할 `User`로 이루어진 배열입니다.</td>
  </tr>
  <tr>
    <td>currentLap</td>
    <td>현재 Lap 입니다.</td>
  </tr>
  <tr>
    <td>finalLap</td>
    <td>마지막 Lap 입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>processLap()</td>
    <td>경기를 1 Lap 진행합니다.</td>
  </tr>
  <tr>
    <td>getWinners()</td>
    <td>`Users`의 `Car`의 `distance`를 기반으로 현재 우승자를 반환합니다.</td>
  </tr>
  <tr>
    <td>isEnd()</td>
    <td>`currentLap`과 `finalLap`를 비교하여 트랙의 종료 여부를 반환합니다.</td>
  </tr>
</table>

## Service

**RacingService**

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>getResult(`names`, `lap`)</td>
    <td>입력받은 값을 기반으로 `track`을 생성해 결과와 우승자를 반환합니다.</td>
  </tr>
</table>

## Views

**InputView**

- 사용자로부터 입력을 받는다.

**OutputView**

- 콘솔에 메세지를 출력한다.

# ⚙️ 기능 구현 목록

## 도메인 구현

- [ ] Car

  - [ ] 초기값으로 `distance`에 `0`을 가진다.
  - [ ] `move(power)`를 호출 시 인자가 `4` 이상이면 `distance`가 `1` 증가합니다.

- [ ] Car 예외 처리

  - [ ] 입력받은 값이 문자열이 아닐 경우 에러를 발생시킨다.

- [ ] User

  - [ ] 초기값으로 `car`에 `Car`를 가진다.
  - [ ] 인자로 입력받은 값을 `name`에 가진다.
  - [ ] `accelerate()`를 호출 시 인자가 난수를 기반으로 이상이면 `car`를 `move` 합니다.

- [ ] User 예외 처리

  - [ ] 입력받은 값이 문자열이 아닐 경우 에러를 발생시킨다.
  - [ ] 입력받은 5자 이상일 경우 에러를 발생시킨다.

- [ ] Track

  - [ ] `currentLap`의 초기값은 `1`이다.
  - [ ] 인자로 입력받은 랩을 `finalLap`에 가진다.
  - [ ] 인자로 입력받은 유저 목록을 `users`에 가진다.
  - [ ] `processLap()`을 호출시 `currentLap`는 `1` 증가한다.
  - [ ] `isEnd()`는 `currentLap`가 `finalLap`과 같은지 반환한다.

- [ ] Track 예외 처리

  - [ ] 입력받은 `users`에 `User`의 인스턴스가 아닌 요소가 존재할 경우 에러를 발생시킨다.
  - [ ] 입력받은 `users`에 동일한 이름을 가진 요소가 존재할 경우 에러를 발생시킨다.
  - [ ] 입력받은 `lap`이 양의 정수가 아닐 경우 에러를 발생시킨다.

## Service 구현

- [ ] racingService
  - [ ] `getResult()`를 호출시 `Track`을 종료시 까지 진행하고 결과와 우승자를 반환합니다.

## Controller 연결

- [ ] `Controller`에 `Service`와 `View`를 연결한다.

# ✅ 최종 체크포인트

- [ ] `ApplicationTest`를 통과하는가?
- [ ] 모든 단위 테스트가 통과하는가?
- [ ] 뎁스가 과도하게 깊은 메서드는 존재하지 않는가?
- [ ] `else`가 존재하지 않는가?
- [ ] 컨벤션에 맞게 코드가 작성되었는가?
- [ ] Node.js 18.17.1 버전에서 실행 가능한가?
- [ ] `package.json`에 변경사항이 존재하지 않는가?
- [ ] `process.exit()`를 호출하는 코드가 존재하지 않는가?
