import cv2
import numpy as np

cap = cv2.VideoCapture('test.mp4')

algo = cv2.bgsegm.createBackgroundSubtractorMOG()

while True:
    ret , frame1 = cap.read()

    grey = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    cv2.imshow('Video original',frame1)

    if cv2.waitKey(1) == 12:
        break

cv2.destroyAllWindows()
cap.release()
