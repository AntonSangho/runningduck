# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 처음에 모터를 멈춘 상태로 시작해요
2. 계속 반복해서 적외선 센서 값을 읽어요
3. 만약 센서 값이 500보다 크면(먹이가 없으면):
   - 모터를 멈춰요
4. 만약 센서 값이 500보다 작으면(먹이가 감지되면):
   - 모터를 한 방향으로 돌려서 펭귄이 달리게 해요
5. A 버튼을 누르면:
   - 모터를 한 방향으로 돌려요
6. B 버튼을 누르면:
   - 모터를 반대 방향으로 돌려요
7. A와 B 버튼을 동시에 누르면:
   - 모터를 멈춰요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/microbit-runningduck.png)

## 텍스트코딩 (Python)

```python
def on_button_pressed_a():
    pins.analog_write_pin(AnalogPin.P1, 0)
    pins.analog_write_pin(AnalogPin.P2, 1023)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.analog_write_pin(AnalogPin.P1, 1023)
    pins.analog_write_pin(AnalogPin.P2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Lcal = 0
pins.digital_write_pin(DigitalPin.P1, 0)
pins.digital_write_pin(DigitalPin.P2, 0)

def on_forever():
    global Lcal
    Lcal = pins.analog_read_pin(AnalogPin.P0)
    if Lcal > 500:
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
    else:
        pins.analog_write_pin(AnalogPin.P1, 0)
        pins.analog_write_pin(AnalogPin.P2, 120)
basic.forever(on_forever)
```

## 코드 설명

이 코드의 중요한 부분을 설명해 드릴게요:

1. **초기 설정**:
   - `Lcal = 0`: 센서 값을 저장할 변수를 만들어요.
   - `P1에 디지털 값 0 출력, P2에 디지털 값 0 출력`: 처음에 모터를 멈춘 상태로 시작해요.

2. **버튼 이벤트**:
   - `A 버튼 누를 때`: A 버튼을 누르면 모터를 한 방향으로 돌려요.
   - `B 버튼 누를 때`: B 버튼을 누르면 모터를 다른 방향으로 돌려요.
   - `A+B 버튼 누를 때`: A와 B 버튼을 동시에 누르면 모터를 멈춰요.

3. **메인 루프**:
   - `Lcal 에 p0의 아날로그 입력 값 저장`: P0 핀에 연결된 적외선 센서 값을 읽어요.
   - `만약 Lcal > 500 이면 `: 센서 값이 500보다 크면(먹이가 없으면) 모터를 멈춰요.
   - `아니면`: 센서 값이 500보다 작으면(먹이가 감지되면) 모터를 돌려요.
   - `P2에 아날로그 값 120출력`: 모터를 특정 속도로 돌려요.

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 블록을 그림처럼 연결하거나 python 탭을 클릭한 후 위의 코드를 붙여넣어요.
4. 프로젝트 이름을 넣고 저장해요.
5. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
6. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
7. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
8. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **감지 기준값 바꾸기**:
   - `만약 Lcal > 500 이면` 부분에서 500 대신 다른 숫자를 넣어보세요.
   - 값을 높이면 더 민감하게, 낮추면 덜 민감하게 반응해요.

2. **모터 속도 바꾸기**:
   - `핀 P2 아날로그 출력 120` 부분에서 120 대신 다른 숫자를 넣어보세요.
   - 숫자가 클수록(최대 1023) 모터가 더 빠르게 돌아요.

3. **반대 방향으로 달리기**:
   - 먹이를 감지했을 때 모터가 반대 방향으로 돌게 바꿔보세요.
   - P1과 P2 핀의 값을 서로 바꾸면 돼요.

## 문제 해결하기

- **센서가 반응하지 않아요**: 
  - 코드에서 감지 기준값(500)을 조정해보세요.
  - 센서와 먹이 그림 사이의 거리를 확인하세요.
  
- **모터가 움직이지 않아요**:
  - P1과 P2 핀이 모터 드라이버에 제대로 연결되었는지 확인하세요.
  - 모터 드라이버에 전원이 잘 공급되는지 확인하세요.
  
- **모터가 너무 느리게 돌아요**:
  - 모터 속도 값(120)을 더 큰 값으로 바꿔보세요.
  - 건전지가 충분히 충전되었는지 확인하세요.
