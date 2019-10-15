import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import torch.utils.data

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.norm0 = nn.BatchNorm2d(3)
        self.conv1 = nn.Conv2d(3, 64, kernel_size = 5, stride = 3, bias = False)
        self.norm1 = nn.BatchNorm2d(64)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(64, 128, 3, bias = False)
        self.norm2 = nn.BatchNorm2d(128)
        self.conv_drop = nn.Dropout2d()
        self.conv3 = nn.Conv2d(128, 256, 3, bias = False)
        self.norm3 = nn.BatchNorm2d(256)
        self.conv4 = nn.Conv2d(256, 128, 1)
        
        self.fc = nn.Linear(128, 21, bias=False)
        self.softmax = nn.Softmax()
    
    def forward(self, x):
        x = self.norm0(x)
        x = self.conv_drop(self.pool(F.relu(self.norm1((self.conv1(x))))))
        x = self.conv_drop(self.pool(F.relu(self.norm2((self.conv2(x))))))
        x = self.conv_drop(self.pool(F.relu(self.norm3((self.conv3(x))))))
        x = F.relu(self.conv4(x))
        x = x.view(-1, 128)
        feature = x
        
        x = self.fc(x)
        x = self.softmax(x)
        
        return x, feature