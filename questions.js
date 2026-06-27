// Auto-generated question data
const QUESTIONS = {
    judge: [
  {
    "question": "conda 可以通过 conda create --name myenv 命令创建一个名为 myenv 的新环境。",
    "answer": true,
    "analysis": "`conda create --name <env_name>` 是 conda 中用于创建新虚拟环境的标准基础命令。"
  },
  {
    "question": "conda remove --name myenv --all 命令用于删除指定环境及其所有包。",
    "answer": true,
    "analysis": "`--all` 参数表示移除该环境下的所有包，结合 `conda remove --name <env_name>` 即可实现彻底删除整个虚拟环境。"
  },
  {
    "question": "使用 conda list 命令可以列出所有创建的环境及其包。",
    "answer": false,
    "analysis": "`conda list` 只能列出当前激活环境中的所有包。要列出所有创建的环境，应使用 `conda env list` 或 `conda info --envs` 命令。"
  },
  {
    "question": "通过 conda update package_name 命令，用户可以更新指定的包及其依赖关系。",
    "answer": true,
    "analysis": "conda 在更新指定包时，会自动解析并更新与其相关的依赖包，以保证环境的兼容性。"
  },
  {
    "question": "conda install package_name 命令只能安装一个包，不能同时安装多个包。",
    "answer": false,
    "analysis": "`conda install` 支持同时安装多个包，只需在命令后依次列出包名即可，例如 `conda install pkg1 pkg2`。"
  },
  {
    "question": "执行 conda env export 命令可以导出当前环境的配置文件。",
    "answer": true,
    "analysis": "该命令会将当前环境的包及版本信息导出为 YAML 格式的配置文件（通常配合 `> environment.yml` 使用），方便环境的复现。"
  },
  {
    "question": "使用 conda deactivate 命令可以停用当前环境，使用户返回到基环境。",
    "answer": true,
    "analysis": "`conda deactivate` 用于退出当前激活的虚拟环境，默认会返回到 base（基环境）或上一层环境。"
  },
  {
    "question": "conda update --all 命令只能在默认环境中使用，无法在特定环境中执行。",
    "answer": false,
    "analysis": "`conda update --all` 可以在任何被激活的虚拟环境中使用，用于更新该环境下的所有包。"
  },
  {
    "question": "在PyTorch中，如果一个张量已经被存储在GPU上，使用tensor.cpu()方法会立即将其移动到CPU，并且这个过程是不可逆的。",
    "answer": false,
    "analysis": "将张量移动到 CPU 后，依然可以通过 `tensor.cuda()` 或 `tensor.to('cuda')` 再次将其移动回 GPU，该过程是可逆的。"
  },
  {
    "question": "如果一个张量已经被分配到了名为\"cuda:1\"的GPU上，那么使用tensor.to('cuda:0')将会把张量移动到名为\"cuda:0\"的GPU上。",
    "answer": true,
    "analysis": "`.to()` 方法可以显式地将张量在不同的设备（包括不同的 GPU 编号）之间进行转移。"
  },
  {
    "question": "如果一个张量在CPU上，使用tensor.to('cuda:0')会抛出错误，因为张量必须先被移动到任何GPU上，才能指定具体的GPU编号。",
    "answer": false,
    "analysis": "在 PyTorch 中，可以直接将 CPU 上的张量移动到指定的 GPU 设备上（如 'cuda:0'），不需要经过中间步骤。"
  },
  {
    "question": "在PyTorch中，使用tensor.to('cuda')和tensor.to('cuda:0')在功能上是等价的，因为'cuda'会被自动解析为'cuda:0'。",
    "answer": true,
    "analysis": "在默认情况下（未修改默认 CUDA 设备时），'cuda' 指向的就是当前默认的 GPU 设备，即 'cuda:0'。"
  },
  {
    "question": "在PyTorch中，定义优化器时必须指定学习率（lr）。",
    "answer": true,
    "analysis": "虽然部分优化器（如 Adam）在源码中有默认学习率，但在实际使用基础优化器（如 SGD）时，学习率 `lr` 是必须显式传入的必需参数。"
  },
  {
    "question": "在使用PyTorch训练模型时，每次迭代前都需要清空优化器的梯度。",
    "answer": true,
    "analysis": "PyTorch 默认会对梯度进行累加，因此在每个 batch 的反向传播之前，必须使用 `optimizer.zero_grad()` 清空历史梯度。"
  },
  {
    "question": "在PyTorch中，使用F.pad进行填充时，不能使用'same'或'valid'作为填充模式。",
    "answer": true,
    "analysis": "`torch.nn.functional.pad` 接收的是具体的填充尺寸元组（如 `(1, 1, 1, 1)`）以及填充模式（如 'constant', 'reflect' 等），不支持像 Keras 那样的 'same' 或 'valid' 字符串参数。"
  },
  {
    "question": "均方误差损失（MSELoss）适用于分类任务。",
    "answer": false,
    "analysis": "均方误差损失（MSELoss）通常用于回归任务；分类任务通常使用交叉熵损失（CrossEntropyLoss）。"
  },
  {
    "question": "平均绝对误差损失（MAELoss）对异常值非常敏感。",
    "answer": false,
    "analysis": "平均绝对误差（MAE，即 L1 Loss）对异常值的鲁棒性较强；均方误差（MSE，即 L2 Loss）由于对误差进行了平方，才对异常值非常敏感。"
  },
  {
    "question": "FCN 是语义分割领域中第一个实现端到端训练的算法。",
    "answer": true,
    "analysis": "FCN（Fully Convolutional Networks）是深度学习在语义分割领域的里程碑之作。它是第一个实现端到端（End-to-End）、像素到像素（Pixel-to-Pixel）训练的全卷积神经网络，摆脱了传统方法对繁琐预处理和后处理的依赖。"
  },
  {
    "question": "Hinge损失（HingeLoss）主要用于最大化分类间隔。",
    "answer": true,
    "analysis": "Hinge Loss 是支持向量机（SVM）中常用的损失函数，其核心思想就是最大化类间的分类间隔（Margin）。"
  },
  {
    "question": "二分类交叉熵损失（BCELoss）适用于多分类问题的输出层。",
    "answer": false,
    "analysis": "BCELoss 专门用于二分类问题。多分类问题应使用 CrossEntropyLoss（结合了 LogSoftmax 和 NLLLoss）。"
  },
  {
    "question": "损失函数是衡量模型预测值与真实值之间差异的指标，与模型训练无关。",
    "answer": false,
    "analysis": "损失函数不仅衡量差异，更是模型训练的核心。优化器通过计算损失函数对参数的梯度来更新模型权重，指导模型训练。"
  },
  {
    "question": "HingeLoss和Sigmoid函数都可以使用在二分类任务中。",
    "answer": true,
    "analysis": "HingeLoss 常用于 SVM 的二分类；Sigmoid 函数常用于逻辑回归或神经网络的二分类输出层（配合 BCELoss）。两者均适用于二分类。"
  },
  {
    "question": "随机梯度下降（SGD）是一种动量优化算法。",
    "answer": false,
    "analysis": "标准的 SGD 只是沿着当前梯度的反方向更新参数，不包含动量。只有在 SGD 中显式设置了 `momentum` 参数后，才成为动量优化算法。"
  },
  {
    "question": "RMSprop优化器的alpha参数控制历史梯度对当前学习率的影响。",
    "answer": true,
    "analysis": "在 RMSprop 中，`alpha`（平滑常数）用于计算梯度平方的指数移动平均值，从而控制历史梯度信息在当前步长调整中的权重。"
  },
  {
    "question": "Adam优化器结合了动量法和RMSprop的优点，同时考虑一阶矩估计和二阶矩估计。",
    "answer": true,
    "analysis": "Adam（Adaptive Moment Estimation）正是利用梯度的一阶矩估计（类似动量）和二阶矩估计（类似 RMSprop）动态调整每个参数的学习率。"
  },
  {
    "question": "权重衰减的Adam优化器（AdamW）将权重衰减与学习率调整结合在一起。",
    "answer": false,
    "analysis": "AdamW 的核心贡献是解耦了权重衰减（Weight Decay）和梯度更新（学习率调整），而不是将它们结合在一起，这修复了标准 Adam 中 L2 正则化失效的问题。"
  },
  {
    "question": "在使用SGD优化器时，增加momentum参数值可以提高模型的收敛速度。",
    "answer": true,
    "analysis": "引入 momentum（动量）可以加速 SGD 在正确方向上的下降，并抑制震荡，从而有效提高模型的收敛速度。"
  },
  {
    "question": "Adadelta优化器中的eps参数用于防止除以零的错误，增大eps可能导致学习率调整过于平滑。",
    "answer": true,
    "analysis": "`eps`（epsilon）是一个极小的常数，加在分母上以保证数值稳定性。如果 `eps` 设置得过大，会掩盖梯度的变化，导致步长调整变得平滑且迟缓。"
  },
  {
    "question": "CNN可以有效的降低传统神经网络的复杂性。",
    "answer": true,
    "analysis": "CNN（卷积神经网络）通过局部感知野和权重共享机制，大幅减少了网络参数的数量，从而有效降低了全连接神经网络的复杂性。"
  },
  {
    "question": "在卷积神经网络中，感受野（Receptive Field）的定义是卷积神经网络每一层输出的特征图上的像素点在输入图片上映射的区域大小。",
    "answer": true,
    "analysis": "感受野正是指特征图上的一个点所能“看到”的原始输入图像的区域大小，它是理解 CNN 提取全局特征能力的重要概念。"
  },
  {
    "question": "PyTorch中的张量（Tensor）默认是在GPU上创建的（ ）。",
    "answer": false,
    "analysis": "PyTorch中的张量默认是在CPU上创建的，需要手动调用 `.cuda()` 或 `.to('cuda')` 才能转移到GPU上。"
  },
  {
    "question": "在PyTorch中，`requires_grad=True`表示该张量在反向传播时需要计算梯度（ ）。",
    "answer": true,
    "analysis": "设置 `requires_grad=True` 会追踪该张量上的所有操作，以便在调用 `.backward()` 时自动计算梯度。"
  },
  {
    "question": "空洞卷积（Dilated Convolution）会增加卷积神经网络的计算量和参数数量（ ）。",
    "answer": false,
    "analysis": "空洞卷积在不增加参数数量和计算量的情况下，通过在卷积核元素间插入空格来扩大感受野。"
  },
  {
    "question": "交叉熵损失函数（CrossEntropyLoss）内部已经包含了Softmax操作（ ）。",
    "answer": true,
    "analysis": "PyTorch中的 `nn.CrossEntropyLoss` 结合了 `nn.LogSoftmax()` 和 `nn.NLLLoss()`，输入不需要先经过Softmax。"
  },
  {
    "question": "ReLU激活函数在输入小于0时，其梯度为1（ ）。",
    "answer": false,
    "analysis": "ReLU函数在输入小于0时，输出为0，其梯度也为0。"
  },
  {
    "question": "nn.Conv2d中的dilation参数只有在图像处理中才有用，在自然语言处理中没有应用（ ）。",
    "answer": false,
    "analysis": "空洞卷积在自然语言处理（如WaveNet、TCN等时序模型）中同样有广泛应用，用于捕捉长距离依赖。"
  },
  {
    "question": "深度学习中，Batch Size越大，模型训练的泛化能力一定越好（ ）。",
    "answer": false,
    "analysis": "Batch Size过大可能会导致模型陷入尖锐的局部极小值，反而降低模型的泛化能力。"
  },
  {
    "question": "Dropout层在模型训练和推理（评估）阶段的行为是完全相同的（ ）。",
    "answer": false,
    "analysis": "训练阶段Dropout会随机丢弃神经元，而推理阶段会保留所有神经元，并对权重进行缩放。"
  },
  {
    "question": "卷积神经网络中的池化层（Pooling）通常会改变特征图的通道数（ ）。",
    "answer": false,
    "analysis": "池化层通常只改变特征图的空间尺寸（长和宽），不会改变通道数。"
  },
  {
    "question": "学习率（Learning Rate）设置过大可能会导致损失函数值在极小值附近震荡甚至发散（ ）。",
    "answer": true,
    "analysis": "学习率过大会导致参数更新步长过大，从而越过最优解，造成震荡或发散。"
  },
  {
    "question": "批量归一化（Batch Normalization）能够有效缓解深度神经网络中的梯度消失问题（ ）。",
    "answer": true,
    "analysis": "BN层通过规范化激活值，使其保持在合理的分布范围内，从而避免梯度过小或过大。"
  },
  {
    "question": "dilation参数在池化层中用于控制池化窗口内元素之间的间隔（ ）。",
    "answer": true,
    "analysis": "与空洞卷积类似，池化层中的dilation参数用于扩大池化窗口的感受野。"
  },
  {
    "question": "ResNet的核心思想是通过引入残差连接（Skip Connection）来解决网络退化问题（ ）。",
    "answer": true,
    "analysis": "残差连接允许梯度直接跨层传播，有效缓解了极深网络中的梯度消失和网络退化现象。"
  },
  {
    "question": "优化器Adam结合了动量（Momentum）和自适应学习率（RMSprop）的优点（ ）。",
    "answer": true,
    "analysis": "Adam不仅计算梯度的一阶矩估计（动量），还计算梯度的二阶矩估计（自适应学习率）。"
  },
  {
    "question": "在PyTorch中，`model.eval()`会自动关闭梯度计算（ ）。",
    "answer": false,
    "analysis": "`model.eval()` 只是将模型设为评估模式（改变Dropout和BN的行为），关闭梯度计算需要使用 `with torch.no_grad():`。"
  },
  {
    "question": "1x1卷积可以用来改变特征图的通道数，从而实现降维或升维（ ）。",
    "answer": true,
    "analysis": "1x1卷积常用于跨通道的信息整合，并通过控制卷积核的数量来改变输出的通道数。"
  },
  {
    "question": "迁移学习中，微调（Fine-tuning）通常需要比从头训练更大的学习率（ ）。",
    "answer": false,
    "analysis": "微调通常使用较小的学习率，因为预训练模型的权重已经比较优秀，过大的学习率会破坏已有特征。"
  },
  {
    "question": "数据增强（Data Augmentation）是一种有效的防止模型过拟合的技术（ ）。",
    "answer": true,
    "analysis": "数据增强通过对训练数据进行随机变换，增加了数据的多样性，从而提升泛化能力，防止过拟合。"
  },
  {
    "question": "在目标检测中，如果模型将一个实际没有目标的区域判断为有目标，这被称为真负例（TN）（ ）。",
    "answer": false,
    "analysis": "实际无目标（负）却预测为有目标（正），这被称为假正例（False Positive, FP）或误报。"
  },
  {
    "question": "IoU（交并比）的值域范围是，值越大表示预测框与真实框重合度越高（ ）。",
    "answer": true,
    "analysis": "IoU是交集面积除以并集面积，完全不重合为0，完全重合为1。"
  },
  {
    "question": "YOLO系列算法属于两阶段（Two-stage）目标检测算法（ ）。",
    "answer": false,
    "analysis": "YOLO（You Only Look Once）是典型的单阶段（One-stage）目标检测算法。"
  },
  {
    "question": "P-R曲线下方的面积越大，模型的平均精确度（AP）越高（ ）。",
    "answer": true,
    "analysis": "AP（Average Precision）的数学定义即为P-R（Precision-Recall）曲线下方的积分面积。"
  },
  {
    "question": "FCN 的全卷积网络是基于传统分类网络（如 VGG）修改而来。",
    "answer": true,
    "analysis": "FCN最初的经典实现就是基于VGG-16、AlexNet和GoogLeNet等成熟的图像分类网络。作者去除了这些网络最后的全连接层，将其替换为1×1的卷积层，并在网络末端添加了反卷积层以实现上采样，从而将分类网络改造成了密集的像素级分割网络。"
  },
  {
    "question": "NMS（非极大值抑制）的作用是消除目标检测中多余的候选框，保留置信度最高的框（ ）。",
    "answer": true,
    "analysis": "NMS通过剔除与最高置信度框IoU大于设定阈值的重叠框，来保证每个目标只保留一个预测框。"
  },
  {
    "question": "在目标检测中，如果模型将一个实际为负类的样本预测为正类，这被称为真正例（TP）（ ）。",
    "answer": false,
    "analysis": "实际为负预测为正，属于假正例（False Positive, FP）。真正例（TP）是实际为正且预测为正。"
  },
  {
    "question": "F1-Score是精确率（Precision）和召回率（Recall）的算术平均数（ ）。",
    "answer": false,
    "analysis": "F1-Score是精确率和召回率的调和平均数，公式为 2 * (P * R) / (P + R)。"
  },
  {
    "question": "锚框（Anchor Box）机制在所有现代目标检测算法中都是必须的（ ）。",
    "answer": false,
    "analysis": "虽然Faster R-CNN、YOLOv3等使用了Anchor，但现在也有许多Anchor-free算法（如FCOS、CenterNet）。"
  },
  {
    "question": "语义分割任务不仅需要区分不同的类别，还需要区分同一类别的不同实例（ ）。",
    "answer": false,
    "analysis": "语义分割只区分像素的类别，不区分同一类别的不同个体；区分不同实例是实例分割（Instance Segmentation）的任务。"
  },
  {
    "question": "PyTorch的`DataLoader`可以通过设置`num_workers`参数来实现多进程数据加载（ ）。",
    "answer": true,
    "analysis": "设置 `num_workers > 0` 可以开启多个子进程来并行加载数据，从而打破数据读取的瓶颈。"
  },
  {
    "question": "在使用PyTorch进行多GPU分布式训练时，`DataParallel`比`DistributedDataParallel`效率更高（ ）。",
    "answer": false,
    "analysis": "`DistributedDataParallel` (DDP) 采用多进程架构，避免了GIL锁的限制和主节点通信瓶颈，效率远高于单进程多线程的 `DataParallel` (DP)。"
  },
  {
    "question": "YOLOv1在处理小目标时的表现优于YOLOv2。",
    "answer": false,
    "analysis": "YOLOv1由于每个网格只预测两个边界框且只能有一个类别，对小目标和密集目标的检测效果较差。YOLOv2通过引入Anchor Boxes、多尺度训练以及高分辨率特征融合（passthrough层），显著提升了对小目标的检测能力。"
  },
  {
    "question": "YOLOv2的定位预测直接输出边界框的坐标。",
    "answer": false,
    "analysis": "YOLOv2没有直接输出边界框的绝对坐标，而是预测相对于网格单元（Grid Cell）左上角的偏移量（tx, ty），并通过Sigmoid函数将偏移量限制在0到1之间，这种做法使得网络更容易学习且训练过程更加稳定。"
  },
  {
    "question": "FCN 的输出特征图尺寸在每个阶段都保持不变。",
    "answer": false,
    "analysis": "FCN的特征图尺寸在网络中是动态变化的。在编码器（特征提取）阶段，经过池化层和步长大于1的卷积层，特征图的空间尺寸会逐渐缩小（下采样）；在解码器阶段，经过反卷积层，特征图的尺寸会逐渐增大（上采样），直到恢复原图尺寸。"
  },
  {
    "question": "在YOLOv1中，所有的边界框都是通过K-means聚类获得的先验框。",
    "answer": false,
    "analysis": "YOLOv1并没有使用先验框（Anchor Box），而是直接通过全连接层预测边界框的坐标。K-means聚类生成先验框的技术是在YOLOv2中首次被引入的。"
  },
  {
    "question": "YOLOv2通过引入批标准化（Batch Normalization）来解决梯度消失和爆炸的问题。",
    "answer": true,
    "analysis": "YOLOv2在网络中的每一个卷积层后都添加了批标准化（Batch Normalization）层，这不仅加速了模型的收敛，稳定了训练过程，还起到了正则化的作用。"
  },
  {
    "question": "FCN 的语义分割结果分辨率由输入图像分辨率决定。",
    "answer": true,
    "analysis": "由于FCN是全卷积网络，且其上采样层的放大倍数与前端网络的下采样倍数严格对应（例如下采样32倍后最终再上采样32倍），因此无论输入图像的分辨率是多少，网络最终输出的分割预测图的分辨率都与输入图像完全一致。"
  },
  {
    "question": "YOLOv3在目标检测中只在一个尺度上进行预测。",
    "answer": false,
    "analysis": "YOLOv3借鉴了FPN（特征金字塔网络）的思想，在三个不同的尺度上（下采样32倍、16倍、8倍）进行预测，从而能够更好地检测不同大小的目标，尤其是小目标。"
  },
  {
    "question": "YOLOv3中每个网格单元只预测一个边界框。",
    "answer": false,
    "analysis": "YOLOv3在三个不同的尺度上进行预测，在每个尺度的每个网格单元（Grid Cell）都会预测3个边界框（Anchor Boxes），因此一共使用了9种不同尺寸的先验框。"
  },
  {
    "question": "CSPDarknet53是YOLOv4中引入的一个新的网络架构。",
    "answer": true,
    "analysis": "YOLOv4的主干网络采用了CSPDarknet53，它结合了CSPNet（Cross Stage Partial Network）的思想和Darknet-53的结构，在增强CNN学习能力的同时降低了计算瓶颈和内存成本。"
  },
  {
    "question": "Mish激活函数在YOLOv4中被用来替换Leaky ReLU。",
    "answer": true,
    "analysis": "YOLOv4在其主干网络（CSPDarknet53）中使用了Mish激活函数来替代Leaky ReLU，Mish函数平滑且非单调的特性有助于梯度更好地传播，从而提升了模型的精度。"
  },
  {
    "question": "YOLOv4中没有使用任何数据增强技术。",
    "answer": false,
    "analysis": "YOLOv4不仅使用了数据增强，还引入了大量先进的数据增强技术（属于Bag of Freebies），例如Mosaic、MixUp、CutMix等，极大提升了模型的泛化能力。"
  },
  {
    "question": "SPPNet允许YOLOv4适应不同尺寸的输入图像大小。",
    "answer": true,
    "analysis": "YOLOv4在Neck部分引入了SPP（Spatial Pyramid Pooling）模块，通过不同尺度的最大池化操作，显著增加了感受野，分离出最显著的上下文特征，且对不同尺寸的输入具有很好的适应性。"
  },
  {
    "question": "PANet（Path Aggregation Network）是YOLOv4中用于特征融合的技术。",
    "answer": true,
    "analysis": "YOLOv4使用PANet代替了YOLOv3中的FPN作为参数聚合的Neck模块。PANet通过自底向上的路径增强，能够更好地将底层的位置特征与高层的语义特征进行融合。"
  },
  {
    "question": "在 FCN 中，1×1 卷积用于降低特征图的通道数。",
    "answer": true,
    "analysis": "在FCN中，1×1卷积被广泛用于调整特征图的通道数（降维或升维）。例如，在将全连接层转换为卷积层时，或者在跳级结构中为了使pool4、pool3的通道数与最终预测类别数一致以便进行相加融合时，都会使用1×1卷积来降低通道数。"
  },
  {
    "question": "YOLOv2 取消了全连接层以减少参数量并提高计算效率。",
    "answer": true,
    "analysis": "YOLOv2去除了YOLOv1中最后的全连接层，将其改造成了一个全卷积网络（FCN），这不仅减少了参数量，还使得网络能够接受任意尺寸的图像输入。"
  },
  {
    "question": "YOLOv2 的多尺度训练允许输入图像的尺寸在 范围内变化。",
    "answer": true,
    "analysis": "由于YOLOv2去除了全连接层，模型可以接受任意尺寸的输入。在训练过程中，每隔10个Batch网络就会随机选择一种新的图像尺寸（从320到608，步长为32），这被称为多尺度训练。"
  },
  {
    "question": "YOLOv2 使用 K-means 聚类来生成先验框（Anchor Box）。",
    "answer": true,
    "analysis": "与Faster R-CNN手动设定Anchor尺寸不同，YOLOv2通过对训练集中的真实边界框（Ground Truth）进行K-means聚类分析，自动寻找最适合的先验框尺寸，从而提高了预测的准确率。"
  },
  {
    "question": "YOLOv2 的损失函数包含位置误差、置信度误差和分类误差三个部分。",
    "answer": true,
    "analysis": "YOLOv2的损失函数延续了YOLO系列的核心思想，综合计算了边界框坐标的位置误差、预测框内是否包含目标的置信度误差以及目标类别的分类误差。"
  },
  {
    "question": "YOLOv2 的 Anchor 框数量固定为 9 个。",
    "answer": false,
    "analysis": "YOLOv2通过K-means聚类后，综合考虑模型复杂度和召回率，通常选择5个Anchor框。而使用9个Anchor框是在YOLOv3中引入的（分配在3个不同的预测尺度上）。"
  },
  {
    "question": "YOLOv2 的网络主干是 Darknet-19，包含 19 个卷积层和 5 个池化层。",
    "answer": true,
    "analysis": "YOLOv2提出了一个新的分类网络作为特征提取的主干，称为Darknet-19。它包含19个卷积层和5个最大池化层，相比YOLOv1的GoogLeNet架构更加高效。"
  },
  {
    "question": "FCN 的反卷积层可以学习到上采样的权重，从而按需恢复细节信息。",
    "answer": true,
    "analysis": "FCN中的上采样并不是使用简单的、固定的插值算法（如双线性插值），而是使用了反卷积（转置卷积）层。反卷积层的卷积核权重是可学习的，网络可以通过反向传播算法不断优化这些权重，从而更智能、自适应地恢复图像细节。"
  },
  {
    "question": "YOLOv2 的多尺度训练通过在训练时动态改变输入图像尺寸来提升模型的泛化能力。",
    "answer": true,
    "analysis": "多尺度训练机制使得同一个网络能够学习到不同分辨率下的特征，从而在测试时能够很好地适应不同分辨率的输入图像，增强了模型的鲁棒性和泛化能力。"
  },
  {
    "question": "FCN 的跳级结构仅在 FCN-8s 中使用，FCN-16s 和 FCN-32s 不包含跳级结构。",
    "answer": false,
    "analysis": "FCN-32s确实没有使用跳级结构；但FCN-16s使用了跳级结构，它融合了pool5上采样结果和pool4的特征；FCN-8s也使用了跳级结构，融合了pool5、pool4和pool3的特征。因此说“FCN-16s不包含跳级结构”是错误的。"
  },
  {
    "question": "YOLOv2 使用了高分辨率样本（448×448）进行微调，最终提升了 4% 的 mAP。",
    "answer": true,
    "analysis": "YOLOv2在ImageNet上先使用224×224的分辨率进行训练，然后使用448×448的高分辨率图像对分类网络进行微调。这使得网络能够更好地适应高分辨率输入，为检测任务带来了约4%的mAP提升。"
  },
  {
    "question": "YOLOv3 的主干网络是 Darknet-53，包含 53 个卷积层。",
    "answer": true,
    "analysis": "YOLOv3的主干特征提取网络是Darknet-53，它大量使用了残差（Residual）结构，网络深度达到了53个卷积层，特征提取能力比Darknet-19更强。"
  },
  {
    "question": "YOLOv3 的主干网络中包含池化层。",
    "answer": false,
    "analysis": "YOLOv3的Darknet-53主干网络中去除了所有的最大池化层（Max Pooling）。特征图的尺寸下采样是通过设置卷积层的步长为2（stride=2）来实现的。"
  },
  {
    "question": "YOLOv3 的多尺度检测通过 32 倍、16 倍和 8 倍降采样的特征图进行预测。",
    "answer": true,
    "analysis": "YOLOv3借鉴了FPN架构，输出了三个不同尺度的特征图用于检测，这三个特征图相对于输入图像分别进行了32倍、16倍和8倍的降采样。"
  },
  {
    "question": "YOLOv3 的多尺度检测中，8 倍降采样的特征图适合检测大目标。",
    "answer": false,
    "analysis": "在多尺度检测中，8倍降采样的特征图尺寸最大，保留了更多的空间细节信息，感受野较小，因此更适合检测小目标；而32倍降采样的特征图感受野最大，适合检测大目标。"
  },
  {
    "question": "YOLOv3 的边界框回归使用的是逻辑回归（logistic regression）来预测 objectness 分数，而不是 softmax。",
    "answer": true,
    "analysis": "YOLOv3为每个边界框使用逻辑回归（Logistic Regression / Sigmoid）来预测其包含目标的置信度（objectness score），如果一个先验框与真实框的IoU最大，则其目标分数为1。"
  },
  {
    "question": "YOLOv3 将 softmax 改为 logistic 来支持多标签分类。",
    "answer": true,
    "analysis": "在实际场景中，一个目标可能同时属于多个类别（例如“女人”和“人”）。YOLOv3放弃了Softmax分类器，转而对每个类别使用独立的逻辑回归（Sigmoid）进行二分类预测，从而完美支持了多标签分类任务。"
  },
  {
    "question": "YOLOv3 的 Multi-Scale 检测通过上采样和特征拼接来增强小目标检测能力。",
    "answer": true,
    "analysis": "YOLOv3借鉴了FPN（特征金字塔网络）的思想，通过对深层特征图进行上采样，并与浅层特征图进行拼接（Concat）融合。这种方式结合了深层的丰富语义信息和浅层的细粒度空间特征，从而显著增强了网络对小目标的检测能力。"
  },
  {
    "question": "YOLOv3 的残差单元（Residual Unit）能够有效避免梯度爆炸和梯度消失问题。",
    "answer": true,
    "analysis": "YOLOv3的骨干网络Darknet-53大量使用了残差结构（Residual Unit）。残差结构通过跳跃连接（Shortcut Connection）引入了恒等映射，使得梯度在反向传播时能够更顺畅地流向浅层网络，从而有效缓解了深层网络训练中常见的梯度消失和梯度爆炸问题。"
  },
  {
    "question": "YOLOv3 的每个预测向量包含 85 个值，包括 4 个边界框参数、1 个置信度和 80 个类别概率。",
    "answer": true,
    "analysis": "在COCO数据集（包含80个类别）上训练的YOLOv3，其每个锚框（Anchor）的预测向量长度为85。这85个值具体包括：4个边界框坐标参数（中心点偏移和宽高缩放）、1个目标置信度（Objectness score）以及80个类别的条件概率。"
  },
  {
    "question": "YOLOv3 支持任意输入尺寸的图像。",
    "answer": true,
    "analysis": "YOLOv3本质上是一个全卷积网络（Fully Convolutional Network），网络中去除了全连接层。由于卷积层对输入图像的尺寸没有固定要求，因此在理论上YOLOv3可以接收任意尺寸的输入图像。但在实际应用中，为了满足网络32倍的下采样率，输入尺寸通常需要是32的整数倍。"
  },
  {
    "question": "YOLOv3 的多尺度检测设计允许每次输入的图片分辨率动态调整。",
    "answer": true,
    "analysis": "YOLOv3在训练过程中采用了多尺度训练策略（Multi-scale Training）。由于网络是全卷积结构，训练时每隔一定的迭代次数（如每10个Batch），网络会自动改变输入图像的尺寸（通常在320×320到608×608之间，且为32的倍数），这使得模型对不同分辨率的图像都具有较强的鲁棒性。"
  },
  {
    "question": "YOLOv3 的多尺度检测与 SSD 的特征融合方式完全相同。",
    "answer": false,
    "analysis": "YOLOv3采用了类似FPN的自顶向下和侧边连接的特征融合方式，通过上采样将深层特征与浅层特征进行拼接（Concat）；而SSD（Single Shot MultiBox Detector）是直接在不同尺度的特征图上分别独立进行预测，没有进行自顶向下的特征融合。两者的多尺度处理方式有本质区别。"
  },
  {
    "question": "FCN 的全卷积网络结构可以适应任意尺寸的输入图像。",
    "answer": true,
    "analysis": "FCN（Fully Convolutional Networks）将传统CNN（如VGG、AlexNet）中的全连接层替换为了卷积层。因为卷积操作只与局部感受野相关，不受全局输入尺寸的限制，所以FCN可以接受任意尺寸的输入图像，并输出相应尺寸的像素级预测图。"
  },
  {
    "question": "FCN 的输出通道数等于分类类别的数量。",
    "answer": true,
    "analysis": "在FCN的最后一层，网络会输出一个特征图，其通道数被设定为语义分割任务的类别总数（通常包含背景类）。每个通道对应一个特定类别的概率热力图，用于后续的像素级分类。"
  },
  {
    "question": "FCN 使用 softmax 函数对每个像素进行分类预测。",
    "answer": true,
    "analysis": "在FCN的输出端，网络会得到一个通道数等于类别数的特征图。FCN在通道维度上对每个像素点应用softmax函数，计算该像素属于各个类别的概率分布，进而取概率最大的类别作为该像素的最终分类结果。"
  },
  {
    "question": "FCN 的跳级结构是为了结合全局信息和局部细节，从而提高分割精度。",
    "answer": true,
    "analysis": "深层特征图具有丰富的全局语义信息但空间细节丢失严重，浅层特征图语义信息较弱但保留了丰富的局部空间细节。FCN的跳级结构（Skip Architecture）将这两种特征图融合，兼顾了“What（类别全局信息）”和“Where（位置局部细节）”，从而显著提高了分割边缘的精度。"
  },
  {
    "question": "FCN-32s 直接从最后一层特征图上采样 32 倍恢复到原图大小。",
    "answer": true,
    "analysis": "FCN-32s是FCN的最基础版本。它没有使用跳级结构，而是直接将经过5次池化（总计下采样32倍）后得到的深层特征图（pool5），通过步长为32的反卷积层一次性放大32倍，直接恢复到原图分辨率。"
  },
  {
    "question": "FCN-16s 在上采样过程中融合了来自 pool4 层的特征图。",
    "answer": true,
    "analysis": "FCN-16s采用了跳级结构。它首先将pool5的特征图上采样2倍，然后与经过1×1卷积降维后的pool4特征图进行逐元素相加融合，最后将融合后的特征图再进行16倍上采样恢复到原图大小。"
  },
  {
    "question": "FCN-8s 的分割精度低于 FCN-32s 和 FCN-16s。",
    "answer": false,
    "analysis": "FCN-8s不仅融合了pool4的特征，还进一步融合了pool3的特征。因为它利用了更多浅层的高分辨率细节信息，所以FCN-8s对物体边缘和细节的分割效果最好，其分割精度高于FCN-16s和FCN-32s。"
  }
],
    choice: [
  {
    "question": "关于conda创建新环境的命令，以下描述不正确的是（）。",
    "options": [
      "可以通过--name指定环境名称",
      "可以在创建时指定Python版本",
      "可以一次性创建多个环境",
      "命令格式为condacreate--namemyenv"
    ],
    "answer": "C",
    "analysis": "使用 `conda create` 命令每次只能创建一个虚拟环境，无法通过一条命令一次性创建多个环境。选项 A、B、D 均是正确的 conda 创建环境的用法及特性。"
  },
  {
    "question": "关于conda激活环境的命令，以下描述不正确的是（）。",
    "options": [
      "使用condaactivate命令来激活环境",
      "激活后可以直接使用环境中的包",
      "可以在未激活环境的情况下使用环境中的包",
      "激活命令后需要指定环境名称"
    ],
    "answer": "C",
    "analysis": "通常情况下，必须先使用 `conda activate` 激活对应的虚拟环境，才能将该环境的环境变量（如 PATH）配置好，从而直接调用环境中的包和解释器。如果不激活环境，直接在命令行中是无法正常使用该环境中的包的（除非使用解释器的绝对路径，但这不属于常规的“直接使用”）。"
  },
  {
    "question": "关于conda删除环境的命令，以下描述不正确的是（）。",
    "options": [
      "可以通过--name指定要删除的环境名称",
      "删除环境的命令是conda remove",
      "可以删除环境中所有的包",
      "删除命令需要加上--all参数"
    ],
    "answer": "D",
    "analysis": "删除 conda 环境有两种常用方式：一是 `conda remove -n env_name --all`，此时确实需要 `--all` 参数来指明删除整个环境及其中所有包；二是使用 `conda env remove -n env_name`，此时不需要加 `--all` 参数。因此“删除命令需要加上--all参数”的说法过于绝对，是不正确的。"
  },
  {
    "question": "关于conda列出已安装包的命令，以下描述不正确的是（）。",
    "options": [
      "命令为conda list",
      "可以查看每个包的版本号",
      "可以列出所有创建的环境",
      "只能列出当前激活环境的包"
    ],
    "answer": "C",
    "analysis": "`conda list` 命令的作用是列出当前环境（或指定环境）中已安装的包及其版本号。如果要列出所有创建的虚拟环境，应该使用 `conda env list` 或 `conda info --envs` 命令。"
  },
  {
    "question": "关于conda更新包的命令，以下描述不正确的是（）。",
    "options": [
      "可以通过conda update package_name更新指定包",
      "可以通过conda update --all更新所有包",
      "更新时可以同时更新环境的所有依赖包",
      "更新包不会影响环境中其他包的版本"
    ],
    "answer": "D",
    "analysis": "conda 在更新某个包时，会自动进行依赖项解析。如果新版本的包依赖于其他更高版本的库，或者与其他库存在版本冲突，conda 会自动更新或降级环境中的其他包以保证环境的依赖平衡。因此，更新包是有可能影响环境中其他包的版本的。"
  },
  {
    "question": "关于conda安装包的命令，以下描述不正确的是（）。",
    "options": [
      "命令格式为condainstallpackage_name",
      "可以从多个源安装包",
      "只能安装一个包",
      "可以指定安装包的版本"
    ],
    "answer": "C",
    "analysis": "使用 `conda install` 命令可以同时安装多个包，只需在命令后用空格隔开包名即可，例如 `conda install numpy pandas`。因此“只能安装一个包”的描述是不正确的。"
  },
  {
    "question": "关于conda导出环境配置的命令，以下描述不正确的是（）。",
    "options": [
      "可以使用condaenvexport导出当前环境",
      "导出的配置可以用于在其他系统中重建环境",
      "可以将环境配置导出为.json文件",
      "导出命令的输出需要重定向到文件"
    ],
    "answer": "C",
    "analysis": "`conda env export` 命令通常用于将环境配置导出为 YAML 格式的文件（通常以 `.yml` 或 `.yaml` 为后缀），以便于通过 `conda env create -f environment.yml` 重建环境，而不是导出为 `.json` 文件。"
  },
  {
    "question": "关于conda搜索包的命令，以下描述不正确的是（）。",
    "options": [
      "命令格式为condasearchpackage_name",
      "可以查看包的可用版本",
      "搜索结果会显示包的详细信息",
      "只能搜索当前环境中的包"
    ],
    "answer": "D",
    "analysis": "`conda search` 命令用于在 conda 的远程仓库（Channels）中搜索可用的包及其版本信息，而不是仅仅搜索当前本地环境中已安装的包。"
  },
  {
    "question": "关于conda列出所有环境的命令，以下描述不正确的是（）。",
    "options": [
      "命令为：conda env list",
      "可以查看环境的路径",
      "会列出当前活动的环境",
      "只能查看一个环境的详细信息"
    ],
    "answer": "D",
    "analysis": "`conda env list`（或 `conda info --envs`）命令会列出系统中所有的 conda 虚拟环境及其对应的物理路径，并在当前激活的环境前标注星号（*），它展示的是所有环境的列表，而不是只能查看一个环境。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的最后一个元素（）。",
    "options": [
      "`tensor[-1]`",
      "`tensor[0]`",
      "`tensor[-0]`",
      "`tensor[len(tensor)]`"
    ],
    "answer": "A",
    "analysis": "在 Python 和 PyTorch 中，负数索引用于从后往前访问元素。`-1` 表示获取张量在第0个维度上的最后一个元素（或最后一行）。选项 D 会导致索引越界错误（IndexError）。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的第一行（）。",
    "options": [
      "`tensor[0,:]`",
      "`tensor[:,0]`",
      "`tensor[1,:]`",
      "`tensor[:,1]`"
    ],
    "answer": "A",
    "analysis": "在二维张量中，逗号前面的索引代表行，逗号后面的索引代表列。`0` 表示第1行，`:` 表示该行的所有列。因此 `tensor[0,:]` 可以获取张量的第一行。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的最后一列（）。",
    "options": [
      "`tensor[:,-1]`",
      "`tensor[:,0]`",
      "`tensor[-1,:]`",
      "`tensor[0,:]`"
    ],
    "answer": "A",
    "analysis": "`:` 表示选取所有行，`-1` 表示选取最后一列。因此 `tensor[:,-1]` 能够获取二维张量中所有行的最后一个元素，即最后一列。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的前两行（）。",
    "options": [
      "`tensor[:2,:]`",
      "`tensor[:,:2]`",
      "`tensor[2:,:]`",
      "`tensor[:,2:]`"
    ],
    "answer": "A",
    "analysis": "切片操作 `[:2]` 等价于 `[0:2]`，表示选取索引 0 和 1（即第1行和第2行）。逗号后面的 `:` 表示选取所有列。因此 `tensor[:2,:]` 获取的是前两行。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的最后两行（）。",
    "options": [
      "`tensor[-2:,:]`",
      "`tensor[:,-2:]`",
      "`tensor[:2,:]`",
      "`tensor[:,:2]`"
    ],
    "answer": "A",
    "analysis": "`-2:` 表示从倒数第2行开始一直取到最后一行。逗号后面的 `:` 表示选取所有列。因此 `tensor[-2:,:]` 获取的是最后两行。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的第2列到第4列（不包括第4列）（）。",
    "options": [
      "`tensor[:,1:3]`",
      "`tensor[:,2:4]`",
      "`tensor[:,1:4]`",
      "`tensor[:,2:3]`"
    ],
    "answer": "A",
    "analysis": "在 PyTorch 和 Python 中，索引是从 0 开始的。第2列对应的索引是 1，第4列对应的索引是 3。切片操作是左闭右开的，因此 `1:3` 包含索引 1 和 2（即第2列和第3列，不包括第4列）。"
  },
  {
    "question": "在PyTorch中，以下哪个操作可以获取张量的第1行和第3行（）。",
    "options": [
      "`tensor[[0,2],:]`",
      "`tensor[:,[0,2]]`",
      "`tensor[0:2,:]`",
      "`tensor[:,0:2]`"
    ],
    "answer": "A",
    "analysis": "要获取不连续的行，可以传入一个包含目标行索引的列表。第1行和第3行的索引分别是 0 和 2，因此使用 `tensor[[0,2],:]` 可以同时提取这两行。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，执行操作`tensor[1,:]`，以下哪个结果是正确的（）。",
    "options": [
      "`tensor([1,2,3])`",
      "`tensor([4,5,6])`",
      "`tensor([7,8,9])`",
      "`tensor([1,4,7])`"
    ],
    "answer": "B",
    "analysis": "`tensor[1,:]` 表示获取索引为 1 的行（即第2行）的所有列元素。在给定的张量中，第2行是 `[4,5,6]`。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，执行操作`tensor[:,2]`，以下哪个结果是正确的（）。",
    "options": [
      "`tensor([1,2,3])`",
      "`tensor([2,5,8])`",
      "`tensor([3,6,9])`",
      "`tensor([1,4,7])`"
    ],
    "answer": "C",
    "analysis": "`tensor[:,2]` 表示获取所有行的索引为 2 的列（即第3列）。在给定的张量中，第3列的元素分别是 3、6、9，因此结果为 `tensor([3,6,9])`。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，执行操作`tensor[:2,:]`，以下哪个结果是正确的（）。",
    "options": [
      "`tensor([[1,2,3],[4,5,6]])`",
      "`tensor([[1,2],[4,5],[7,8]])`",
      "`tensor([[1,2,3],[7,8,9]])`",
      "`tensor([[2,3],[5,6]])`"
    ],
    "answer": "A",
    "analysis": "`tensor[:2,:]` 表示获取索引为 0 和 1 的行（即前两行）的所有列。前两行分别是 `[1,2,3]` 和 `[4,5,6]`，因此结果为 `tensor([[1,2,3],[4,5,6]])`。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，执行操作`tensor[:,:2]`，以下哪个结果是正确的（）。",
    "options": [
      "`tensor([[1,2],[4,5],[7,8]])`",
      "`tensor([[1,2,3],[4,5,6]])`",
      "`tensor([[1,2,3],[7,8,9]])`",
      "`tensor([[2,3],[5,6],[8,9]])`"
    ],
    "answer": "A",
    "analysis": "`tensor[:,:2]` 表示获取所有行的前两列（索引 0 和 1）。原张量的每一行取前两个元素，即 `[1,2]`、`[4,5]`、`[7,8]`，组合起来结果为 `tensor([[1,2],[4,5],[7,8]])`。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的最后一行？",
    "options": [
      "`tensor[-1,:]`",
      "`tensor[:,-1]`",
      "`tensor[1,:]`",
      "`tensor[:,1]`"
    ],
    "answer": "A",
    "analysis": "`-1` 在行索引位置表示最后一行，`:` 在列索引位置表示所有列。因此 `tensor[-1,:]` 用于获取张量的最后一行。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取所有行的最后一列？",
    "options": [
      "`tensor[:,-1]`",
      "`tensor[-1,:]`",
      "`tensor[1,:]`",
      "`tensor[:,1]`"
    ],
    "answer": "A",
    "analysis": "`:` 在行索引位置表示所有行，`-1` 在列索引位置表示最后一列。因此 `tensor[:,-1]` 用于获取所有行的最后一列。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的第1行到第2行（不包括第3行）的所有元素？",
    "options": [
      "`tensor[1:2,:]`",
      "`tensor[1:3,:]`",
      "`tensor[0:2,:]`",
      "`tensor[1:,:]`"
    ],
    "answer": "C",
    "analysis": "第1行和第2行对应的索引是 0 和 1。使用左闭右开的切片语法，应为 `0:2`。因此 `tensor[0:2,:]` 可以获取第1行和第2行的所有元素。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取所有行的第1列到第2列（不包括第3列）的元素？",
    "options": [
      "`tensor[:,1:2]`",
      "`tensor[:,0:2]`",
      "`tensor[1:3,:]`",
      "`tensor[:,-1]`"
    ],
    "answer": "B",
    "analysis": "第1列和第2列对应的索引是 0 和 1。列切片应为 `0:2`。因此 `tensor[:,0:2]` 用于获取所有行的第1列和第2列。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的第1行和第2行的所有元素？",
    "options": [
      "`tensor[[0,1],:]`",
      "`tensor[[0,2],:]`",
      "`tensor[1:2,:]`",
      "`tensor[:,[0,2]]`"
    ],
    "answer": "A",
    "analysis": "第1行和第2行的索引为 0 和 1。通过传递索引列表 `[0,1]`，即 `tensor[[0,1],:]`，可以获取这两行。也可以使用切片 `tensor[0:2,:]`，但选项中只有 A 符合要求。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的所有行的第1列和第2列？",
    "options": [
      "`tensor[:,[0,2]]`",
      "`tensor[[0,2],:]`",
      "`tensor[:,0:2]`",
      "`tensor[:,2:]`"
    ],
    "answer": "C",
    "analysis": "第1列和第2列对应的索引是 0 和 1。使用切片 `0:2` 可以提取这两列。因此 `tensor[:,0:2]` 是正确的操作。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以将张量的形状从(3,3)变换为(1,9)？",
    "options": [
      "`tensor.view(1,9)`",
      "`tensor.unsqueeze(0)`",
      "`tensor.reshape(9)`",
      "`tensor.permute(1,0)`"
    ],
    "answer": "A",
    "analysis": "`view()` 方法用于返回一个具有相同数据但形状不同的新张量。`tensor.view(1,9)` 可以将形状为 (3,3) 的张量重塑为 (1,9)。注意 `reshape(1,9)` 也可以，但选项 C 是 `reshape(9)`（形状变为一维的9），不符合题意。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以交换张量的行和列（转置操作）？",
    "options": [
      "`tensor.transpose(0,1)`",
      "`tensor.permute(1,0)`",
      "`tensor.t()`",
      "以上全部"
    ],
    "answer": "D",
    "analysis": "对于二维张量，`transpose(0,1)` 交换第0维和第1维；`permute(1,0)` 将维度重新排列为第1维在前、第0维在后；`t()` 是专门针对二维张量的简写转置方法。这三种方法都可以实现行列交换。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的逆序（行列同时逆序）？",
    "options": [
      "`tensor[::-1,::-1]`",
      "`tensor[:,::-1]`",
      "`tensor[::-1,:]`",
      "`tensor.flip(0,1)`"
    ],
    "answer": "A",
    "analysis": "在 Python 的高级切片语法中，步长为 `-1` 表示逆序。`::-1` 应用于行和列，即 `tensor[::-1,::-1]`，可以实现行和列的同时逆序翻转。（注：在 PyTorch 中也可以使用 `tensor.flip([0, 1])` 实现相同效果，但选项 D 的语法 `flip(0,1)` 参数格式不正确，应传入列表或元组）。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，执行操作`tensor[1:3,0]`，以下哪个结果是正确的？",
    "options": [
      "`tensor([1,4])`",
      "`tensor([4,7])`",
      "`tensor([2,5])`",
      "`tensor([1,2])`"
    ],
    "answer": "B",
    "analysis": "`tensor[1:3,0]` 表示获取行索引为 1 和 2（即第2行和第3行），且列索引为 0（即第1列）的元素。第2行的第1列元素是 4，第3行的第1列元素是 7。因此提取出的结果为 `tensor([4,7])`。"
  },
  {
    "question": "关于PyTorch中`torch.reshape`和`tensor.view`的区别，以下哪项描述正确？",
    "options": [
      "`torch.reshape`会改变原始tensor的数据，而`tensor.view`不会",
      "`tensor.view`要求tensor是连续的，而`torch.reshape`不要求",
      "`torch.reshape`和`tensor.view`在功能上完全相同",
      "`tensor.view`只能用于一维张量"
    ],
    "answer": "B",
    "analysis": "在PyTorch中，`tensor.view`要求张量在内存中是连续的（contiguous），并且返回的是原张量的视图（共享内存）；而`torch.reshape`不要求张量连续，当张量连续时它相当于`view`，当张量不连续时它会先进行深拷贝（相当于调用`contiguous()`）再改变形状。"
  },
  {
    "question": "以下关于PyTorch中`torch.transpose`和`torch.flatten`的描述，正确的是？",
    "options": [
      "`torch.transpose`会改变原始tensor的数据，而`torch.flatten`不会",
      "`torch.transpose`返回一个新的张量，其维度被交换，`torch.flatten`返回一个新的张量，其所有维度展平为一维",
      "`torch.transpose`和`torch.flatten`在功能上完全相同",
      "`torch.transpose`只能用于二维张量"
    ],
    "answer": "B",
    "analysis": "`torch.transpose`用于交换张量的两个指定维度，返回维度交换后的视图；`torch.flatten`用于将张量从指定的起始维度到结束维度展平为一维。两者都不会直接修改原始张量的底层数据，而是返回新的张量（通常是视图）。`torch.transpose`可用于任意高维张量，不仅限于二维。"
  },
  {
    "question": "关于PyTorch中`torch.unsqueeze`和`torch.squeeze`的描述，以下正确的是？",
    "options": [
      "`torch.unsqueeze`返回一个新的张量，在指定维度增加一个维度",
      "`torch.squeeze`返回一个新的张量，移除所有长度为1的维度",
      "`torch.unsqueeze`和`torch.squeeze`都不会改变原始张量的数据",
      "以上都正确"
    ],
    "answer": "D",
    "analysis": "`torch.unsqueeze`用于在指定位置插入一个大小为1的新维度；`torch.squeeze`用于移除张量中所有大小为1的维度（或指定的大小为1的维度）。这两个操作都只改变张量的形状信息，返回原张量的视图，不会改变底层的数据内存。"
  },
  {
    "question": "以下关于PyTorch中`torch.cat`和`torch.stack`的描述，正确的是？",
    "options": [
      "`torch.cat`将多个张量沿指定维度连接起来，并不会创建新的维度",
      "`torch.stack`返回一个新的张量，将多个张量沿指定维度堆叠起来，创建新的维度",
      "`torch.cat`和`torch.stack`的使用场景不同",
      "以上都正确"
    ],
    "answer": "D",
    "analysis": "`torch.cat`（拼接）是在现有的维度上将多个张量连接在一起，不会增加张量的维度数；而`torch.stack`（堆叠）会将多个张量沿着一个全新的维度进行堆叠，因此会使输出张量的维度数比输入张量多一维。两者根据是否需要扩展新维度而应用于不同的场景。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以获取张量的第1行和第2行的第1列的元素？",
    "options": [
      "`tensor[[0,2],[1,1]]`",
      "`tensor[[0,1],[2,0]]`",
      "`tensor[[0,1],0]`",
      "`tensor[[1,2],[0,2]]`"
    ],
    "answer": "C",
    "analysis": "在Python/PyTorch中，索引是从0开始的。“第1行和第2行”对应行索引0和1，“第1列”对应列索引0。使用高级索引`tensor[[0,1],0]`可以同时取出索引为(0,0)和(1,0)的元素，即获取第1行第1列和第2行第1列的元素。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])`，以下哪个操作可以将张量展平为一维？",
    "options": [
      "`tensor.view(-1)`",
      "`tensor.reshape(-1)`",
      "`torch.flatten(tensor)`",
      "以上都正确"
    ],
    "answer": "D",
    "analysis": "`tensor.view(-1)`和`tensor.reshape(-1)`中的-1表示由PyTorch自动推断该维度的大小，从而将整个张量展平为一维。`torch.flatten(tensor)`也是专门用于将张量展平的函数。因此三种方法都可以实现目标。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([[[1,2],[3,4]],[[5,6],[7,8]]])`，以下哪个操作可以将第1维和第2维互换？",
    "options": [
      "`torch.transpose(tensor,0,2)`",
      "`tensor.permute(2,1,0)`",
      "`tensor.permute(0,2,1)`",
      "`torch.transpose(tensor,0,1)`"
    ],
    "answer": "C",
    "analysis": "在PyTorch中，维度（dim）是从0开始编号的。题目中的“第1维和第2维”指的是索引为1和2的维度（即`dim=1`和`dim=2`）。`tensor.permute(0,2,1)`表示保持第0维不变，将原来的第2维放到第1维的位置，原来的第1维放到第2维的位置，从而实现了`dim=1`和`dim=2`的互换。"
  },
  {
    "question": "给定张量`a=torch.tensor([1,2,3])`和`b=torch.tensor([4,5,6])`，以下哪个操作可以将两个张量拼接为`tensor([1,2,3,4,5,6])`？",
    "options": [
      "`torch.cat((a,b))`",
      "`torch.stack((a,b))`",
      "`torch.cat((a,b),dim=0)`",
      "A和C"
    ],
    "answer": "D",
    "analysis": "`a`和`b`都是一维张量。`torch.cat`用于在现有维度上拼接，默认的拼接维度是`dim=0`，因此`torch.cat((a,b))`和`torch.cat((a,b),dim=0)`效果相同，都会得到一维张量`tensor([1,2,3,4,5,6])`。而`torch.stack`会增加新维度，得到的是二维张量。"
  },
  {
    "question": "给定张量`tensor=torch.tensor([1,2,3,4,5,6])`，以下哪个操作可以将张量分割为3个大小为2的张量？",
    "options": [
      "`torch.chunk(tensor,3)`",
      "`torch.split(tensor,2)`",
      "`torch.split(tensor,[2,2,2])`",
      "以上都正确"
    ],
    "answer": "D",
    "analysis": "`torch.chunk(tensor, 3)`表示将张量均匀分割成3块；`torch.split(tensor, 2)`表示将张量按每块大小为2进行分割；`torch.split(tensor, [2,2,2])`表示将张量分割成大小分别为2、2、2的3块。这三种操作在此场景下都能得到相同的结果。"
  },
  {
    "question": "在使用PyTorch定义模型时，哪个类用于创建神经网络模型？",
    "options": [
      "`torch.optim`",
      "`torch.nn`",
      "`torch.utils`",
      "`torch.autograd`"
    ],
    "answer": "B",
    "analysis": "`torch.nn`（Neural Networks）是PyTorch中专门用于构建神经网络的模块，包含了各种层（如全连接层、卷积层）、损失函数等。`torch.optim`用于优化算法，`torch.utils`包含数据加载等实用工具，`torch.autograd`用于自动求导。"
  },
  {
    "question": "在PyTorch中，损失函数应该在哪个步骤之后计算？",
    "options": [
      "清空优化器梯度之后",
      "前向传播之后",
      "反向传播之后",
      "更新模型参数之后"
    ],
    "answer": "B",
    "analysis": "在神经网络的训练循环中，首先输入数据进行前向传播（Forward Propagation）得到模型的预测输出，然后将预测输出与真实标签进行对比来计算损失函数（Loss）。计算完损失后，再进行反向传播（Backward）计算梯度，最后更新参数。"
  },
  {
    "question": "神经元的输出信号通常用数字0和1来表示，这意味着神经元的激活状态是（ ）。",
    "options": [
      "连续的",
      "离散的",
      "随机的",
      "不可预测的"
    ],
    "answer": "B",
    "analysis": "数字0和1代表了“未激活”和“激活”两种明确的状态，这种非连续的取值方式属于离散的（Discrete）状态表示。"
  },
  {
    "question": "感知器模型的主要缺点是（ ）。",
    "options": [
      "无法处理线性不可分问题",
      "训练速度太慢",
      "参数初始化过于复杂",
      "需要大量的数据"
    ],
    "answer": "A",
    "analysis": "单层感知器（Perceptron）只能解决线性可分的问题（如逻辑与、逻辑或），对于线性不可分的问题（如著名的异或XOR问题）无法进行有效分类，这是其最主要的理论缺陷。"
  },
  {
    "question": "在神经元的工作原理中，忽略小的信号是为了（ ）。",
    "options": [
      "增加计算复杂度",
      "减少能量消耗",
      "提高信号传递速度",
      "保持神经系统稳定"
    ],
    "answer": "D",
    "analysis": "生物神经元和人工神经元中通常存在一个“阈值”机制，只有当输入信号的累加超过阈值时才会被激活。忽略微小的、可能是噪声的信号，可以防止神经元过度频繁触发，从而保持整个神经系统的稳定性。"
  },
  {
    "question": "在全连接神经网络中，数据从输入层到输出层的传递过程称为（ ）。",
    "options": [
      "反向传播",
      "前向传播",
      "权重更新",
      "损失计算"
    ],
    "answer": "B",
    "analysis": "数据从输入层逐层经过网络计算，最终到达输出层并产生预测结果的过程，被称为前向传播（Forward Propagation）。"
  },
  {
    "question": "在神经网络的训练过程中，用于衡量网络输出与实际标签之间差异的函数称为（ ）。",
    "options": [
      "激活函数",
      "损失函数",
      "优化算法",
      "反向传播"
    ],
    "answer": "B",
    "analysis": "损失函数（Loss Function）或代价函数（Cost Function）的作用就是量化模型预测值与真实标签之间的误差大小，模型训练的本质就是最小化这个损失函数。"
  },
  {
    "question": "反向传播算法的主要目的是（ ）。",
    "options": [
      "增加网络的复杂度",
      "减少网络的参数数量",
      "更新网络的权重和偏置",
      "计算网络的输出"
    ],
    "answer": "C",
    "analysis": "反向传播（Backpropagation）算法通过链式法则从输出层向输入层计算损失函数对各个参数的梯度，其最终目的是为优化算法提供梯度信息，从而更新网络的权重（Weights）和偏置（Biases），使网络误差减小。"
  },
  {
    "question": "在神经网络中，激活函数的作用是（ ）。",
    "options": [
      "增加网络的计算量",
      "引入非线性因素",
      "减少网络的参数",
      "提高网络的运行速度"
    ],
    "answer": "B",
    "analysis": "如果没有激活函数，无论神经网络有多少层，其输出始终是输入的线性组合，等价于单层线性模型。激活函数引入了非线性因素，使得神经网络能够拟合各种复杂的非线性函数。"
  },
  {
    "question": "Batch Normalization技术可以解决以下哪个问题？（ ）",
    "options": [
      "梯度消失",
      "梯度爆炸",
      "过拟合",
      "欠拟合"
    ],
    "answer": "A",
    "analysis": "Batch Normalization（批量归一化）通过规范化每一层的输入分布，缓解了内部协变量偏移问题，使得激活值保持在合理的范围内，从而有效避免了在深层网络中容易出现的梯度消失（以及一定程度上的梯度爆炸）问题。"
  },
  {
    "question": "以下哪个激活函数在正区间内导数为1，可以有效缓解梯度消失问题？（ ）",
    "options": [
      "Sigmoid",
      "Tanh",
      "ReLU",
      "Leaky ReLU"
    ],
    "answer": "C",
    "analysis": "ReLU（Rectified Linear Unit）的数学表达式为 $f(x) = \\max(0, x)$。当 $x > 0$ 时，其导数恒为1。这使得在反向传播时，正区间的梯度能够无衰减地传递，从而有效缓解了深层网络中的梯度消失问题。"
  },
  {
    "question": "梯度爆炸问题通常是由于什么原因引起的？（ ）",
    "options": [
      "激活函数的选择",
      "权重初始化不当",
      "网络深度",
      "所有以上选项"
    ],
    "answer": "D",
    "analysis": "梯度爆炸通常发生在深层网络中（网络深度）。如果权重初始化过大（权重初始化不当），或者使用了在某些区间导数大于1的激活函数，在反向传播的链式连乘过程中，梯度会呈指数级增长，最终导致梯度爆炸。因此以上因素均有关联。"
  },
  {
    "question": "以下哪个激活函数是为了解决ReLU神经元坏死问题而提出的？（ ）",
    "options": [
      "Leaky ReLU",
      "ReLU6",
      "Swish",
      "GELU"
    ],
    "answer": "A",
    "analysis": "ReLU在输入小于0时导数为0，如果某个神经元在训练中更新过大导致其对所有数据的输入都小于0，该神经元的梯度将永远为0，即“神经元坏死”。Leaky ReLU在负区间赋予了一个微小的斜率（如0.01），使得负区间也有非零梯度，从而解决了这个问题。"
  },
  {
    "question": "以下哪个激活函数在自然语言处理（NLP）任务中表现出色？",
    "options": [
      "Sigmoid",
      "Tanh",
      "GELU",
      "Softmax"
    ],
    "answer": "C",
    "analysis": "GELU（Gaussian Error Linear Unit）结合了ReLU、Dropout和Zoneout的性质，在Transformer架构（如BERT、GPT等主流NLP模型）中被广泛使用，并在自然语言处理任务中表现极为出色。"
  },
  {
    "question": "以下哪个激活函数最常用于多分类问题的输出层？",
    "options": [
      "Sigmoid",
      "Softmax",
      "ReLU",
      "GELU"
    ],
    "answer": "B",
    "analysis": "Softmax函数能够将输出的多个实数映射为(0, 1)之间的概率分布，且所有类别的概率之和为1。因此它最常被用作多分类神经网络的输出层激活函数。"
  },
  {
    "question": "以下哪个激活函数是严格零中心的？",
    "options": [
      "Sigmoid",
      "Tanh",
      "ReLU",
      "Leaky ReLU"
    ],
    "answer": "B",
    "analysis": "Tanh（双曲正切）函数的值域是(-1, 1)，且其图像关于原点对称，输出的均值接近于0，因此是严格零中心（Zero-centered）的激活函数。而Sigmoid的值域是(0, 1)，不是零中心的。"
  },
  {
    "question": "在选择激活函数时，以下哪个因素不需要考虑？",
    "options": [
      "任务类型",
      "网络深度",
      "数据分布和特征",
      "训练时间长短"
    ],
    "answer": "D",
    "analysis": "选择激活函数主要取决于任务类型（如多分类用Softmax）、网络深度（深层网络避免用Sigmoid以防梯度消失）以及数据特征。虽然不同激活函数的计算复杂度略有不同，但“训练时间长短”通常不是选择激活函数时需要重点考虑的理论因素。"
  },
  {
    "question": "在深度学习中，随机梯度下降（SGD）优化器的主要缺点是什么？",
    "options": [
      "实现复杂",
      "可能会陷入局部最小值",
      "不能用于大规模数据集",
      "不能用于在线学习"
    ],
    "answer": "B",
    "analysis": "标准的SGD优化器在复杂的非凸损失曲面上容易陷入局部最小值（Local Minima）或鞍点（Saddle Points），且在峡谷地带容易产生震荡，导致收敛缓慢。"
  },
  {
    "question": "在PyTorch中，使用SGD优化器时，哪个参数用于控制参数更新的步长？",
    "options": [
      "lr",
      "momentum",
      "weight_decay",
      "nesterov"
    ],
    "answer": "A",
    "analysis": "在`torch.optim.SGD`中，`lr`（Learning Rate，学习率）参数决定了每次参数更新时沿着梯度相反方向迈出的步长大小。"
  },
  {
    "question": "Adam优化器结合了哪种优化器的优点？",
    "options": [
      "SGD和Adagrad",
      "SGD和RMSprop",
      "Adagrad和RMSprop",
      "Adagrad和Adadelta"
    ],
    "answer": "B",
    "analysis": "Adam（Adaptive Moment Estimation）优化器本质上结合了动量法（Momentum，通常与SGD结合使用，利用历史梯度的指数移动平均）和RMSprop（自适应学习率，利用历史梯度平方的指数移动平均）的优点。选项B最符合其核心思想。"
  },
  {
    "question": "AdamW优化器与Adam优化器的主要区别是什么？",
    "options": [
      "AdamW使用不同的学习率调整策略",
      "AdamW从学习率调整中分离出权重衰减",
      "AdamW使用不同的动量计算方法",
      "AdamW适用于不同的数据类型"
    ],
    "answer": "B",
    "analysis": "在标准的Adam优化器中，L2正则化（权重衰减）通常与梯度更新耦合在一起，这在自适应学习率下会导致正则化效果大打折扣。AdamW（Adam with Weight Decay Fix）的核心改进就是将权重衰减（Weight Decay）从梯度更新的计算中解耦分离出来，从而提升了模型的泛化能力。"
  },
  {
    "question": "权重共享在卷积神经网络中的作用不包括以下哪一项？",
    "options": [
      "减少模型参数",
      "使同一个神经元关注一个特征",
      "使不同的神经元关注不同的特征",
      "增加计算量"
    ],
    "answer": "D",
    "analysis": "权重共享是卷积神经网络（CNN）的核心特性之一。它使得同一个卷积核在图像的不同位置提取相同的特征，从而大幅减少了模型参数，降低了过拟合的风险，同时也减少了计算量，而不是增加计算量。"
  },
  {
    "question": "在PyTorch中，卷积神经网络的卷积操作主要由哪个类实现？",
    "options": [
      "torch.nn.Linear",
      "torch.nn.Conv1d",
      "torch.nn.Conv2d",
      "torch.nn.MaxPool2d"
    ],
    "answer": "C",
    "analysis": "在PyTorch中，处理图像等二维数据最常用的卷积操作是由 `torch.nn.Conv2d` 类实现的。`torch.nn.Linear` 是全连接层，`torch.nn.Conv1d` 用于一维序列数据，`torch.nn.MaxPool2d` 是二维最大池化层。"
  },
  {
    "question": "以下哪个参数不是PyTorch中torch.nn.Conv2d类的参数？",
    "options": [
      "in_channels",
      "out_channels",
      "stride",
      "activation"
    ],
    "answer": "D",
    "analysis": "`torch.nn.Conv2d` 的常用参数包括 `in_channels`（输入通道数）、`out_channels`（输出通道数）、`kernel_size`（卷积核大小）、`stride`（步长）、`padding`（填充）等。激活函数（activation）通常在卷积层之后单独调用（如 `nn.ReLU()`），而不是作为卷积层的参数。"
  },
  {
    "question": "在PyTorch中，以下哪个padding参数的设置会导致输出特征图的大小与输入图像的大小相同？",
    "options": [
      "padding=1",
      "padding='same'",
      "padding='valid'",
      "padding=0"
    ],
    "answer": "B",
    "analysis": "在PyTorch中，当 `stride=1` 时，设置 `padding='same'` 会自动计算并在输入周围进行填充，使得输出特征图的空间尺寸（高和宽）与输入图像完全相同。'valid' 表示不进行任何填充。"
  },
  {
    "question": "以下哪个选项描述了PyTorch中nn.Conv2d的padding参数的正确使用方式？",
    "options": [
      "padding只能是一个整数",
      "padding可以是一个整数或元组",
      "padding不能是一个字符串",
      "padding只能是'same'或'valid'"
    ],
    "answer": "B",
    "analysis": "在 `nn.Conv2d` 中，`padding` 可以是一个整数（表示高和宽使用相同的填充量），也可以是一个元组（分别指定高和宽的填充量），同时在较新的PyTorch版本中也支持字符串如 'same' 或 'valid'。因此，最准确的描述是它可以是整数或元组。"
  },
  {
    "question": "以下哪个选项描述了PyTorch中nn.Conv2d的padding_mode参数的'replicate'模式？",
    "options": [
      "使用边缘的复制进行填充",
      "使用边缘的镜像反射进行填充",
      "使用0进行填充",
      "将图像视为循环的，即边缘相连"
    ],
    "answer": "A",
    "analysis": "`padding_mode` 参数决定了填充的方式。'zeros' 是默认的零填充；'replicate' 模式表示复制输入张量最边缘的像素值来进行填充；'reflect' 是镜像反射填充；'circular' 是循环填充。"
  },
  {
    "question": "IoU（交并比）是衡量什么程度的指标？",
    "options": [
      "模型预测的准确性",
      "模型预测的速度",
      "预测边界框与真实边界框重叠程度",
      "模型的泛化能力"
    ],
    "answer": "C",
    "analysis": "IoU（Intersection over Union，交并比）是目标检测中常用的评价指标，计算公式为预测边界框与真实边界框的交集面积除以它们的并集面积，用于衡量两者之间的重叠程度。"
  },
  {
    "question": "在目标检测中，真正例（TP）是指：",
    "options": [
      "模型错误预测为正类的样本",
      "模型正确预测为负类的样本",
      "模型正确预测为正类的样本",
      "模型错误预测为负类的样本"
    ],
    "answer": "C",
    "analysis": "在混淆矩阵中，真正例（True Positive, TP）指的是实际类别为正类，且模型也正确预测为正类的样本。在目标检测中，通常指预测框与真实框的IoU大于设定阈值且类别预测正确的样本。"
  },
  {
    "question": "假负例（FN）在目标检测中的含义是：",
    "options": [
      "模型错误检测到的目标",
      "模型正确判断为无目标的区域",
      "实际有目标，但模型没有检测到",
      "实际没有目标，模型也判断为无目标"
    ],
    "answer": "C",
    "analysis": "假负例（False Negative, FN）指的是实际类别为正类，但模型预测为负类的样本。在目标检测中，FN代表实际存在的目标（Ground Truth），但模型未能检测出来（即漏检）。"
  },
  {
    "question": "在所有被模型预测为正例的样本中，实际也为正例的比例由哪个指标衡量？",
    "options": [
      "准确率",
      "精确率（Precision）",
      "召回率（Recall）",
      "Fβ-score"
    ],
    "answer": "B",
    "analysis": "精确率（Precision）的计算公式为 TP / (TP + FP)，它衡量的是在模型预测出的所有正例中，有多少是真正的正例（即预测的准确程度）。"
  },
  {
    "question": "当我们更注重查全率而不是查准率时，我们更注重以下哪个指标？",
    "options": [
      "精确率（Precision）",
      "召回率（Recall）",
      "Fβ-score",
      "AUC"
    ],
    "answer": "B",
    "analysis": "查全率即召回率（Recall），其计算公式为 TP / (TP + FN)。它衡量的是所有真实的样本中，有多少被模型成功找了出来。注重查全率意味着我们希望尽可能少地漏掉真实目标。"
  },
  {
    "question": "F1-score是以下哪个指标的特例？",
    "options": [
      "精确率（Precision）",
      "召回率（Recall）",
      "Fβ-score",
      "AUC"
    ],
    "answer": "C",
    "analysis": "F1-score 是 Fβ-score 在 β=1 时的特例。Fβ-score 是精确率和召回率的加权调和平均数，当 β=1 时，表示精确率和召回率同等重要。"
  },
  {
    "question": "P-R曲线越靠近哪个方向，表示模型的性能越好？",
    "options": [
      "左下角",
      "右下角",
      "左上角",
      "右上角"
    ],
    "answer": "D",
    "analysis": "P-R曲线的横轴是召回率（Recall），纵轴是精确率（Precision）。曲线越靠近右上角，意味着模型在保持高召回率的同时，依然能维持高精确率，代表模型性能越好。"
  },
  {
    "question": "AP（Average Precision）是以下哪个曲线下方的面积？",
    "options": [
      "ROC曲线",
      "P-R曲线",
      "混淆矩阵",
      "准确率曲线"
    ],
    "answer": "B",
    "analysis": "AP（Average Precision，平均精度）通常通过计算 P-R（Precision-Recall）曲线下方的面积来获得。它综合反映了模型在不同召回率下的精确率表现。"
  },
  {
    "question": "mAP（mean Average Precision）是以下哪个指标的平均值？",
    "options": [
      "所有类别的准确率",
      "所有类别的精确率",
      "所有类别的召回率",
      "所有类别的AP"
    ],
    "answer": "D",
    "analysis": "mAP（mean Average Precision）是目标检测中用来评估多类别检测性能的综合指标。它是对数据集中所有类别的 AP（Average Precision）求算术平均值。"
  },
  {
    "question": "AUC值的范围是多少？",
    "options": [
      "0到1之间",
      "-1到1之间",
      "0到100之间",
      "1到100之间"
    ],
    "answer": "A",
    "analysis": "AUC（Area Under Curve）是指 ROC 曲线下方的面积。因为 ROC 曲线的横轴（FPR）和纵轴（TPR）的取值范围都是，所以 AUC 的值域也是在 0 到 1 之间。"
  },
  {
    "question": "关于 YOLOv1 的核心思想，以下描述正确的是",
    "options": [
      "YOLOv1 将目标检测任务分为多个步骤完成",
      "YOLOv1 通过单个神经网络一次性预测边界框和类别概率",
      "YOLOv1 需要多次评估图像才能完成检测",
      "YOLOv1 主要依靠 Anchor 框进行预测"
    ],
    "answer": "B",
    "analysis": "YOLO（You Only Look Once）的核心思想是将目标检测视为一个单一的回归问题。它通过一个端到端的卷积神经网络，直接从整张图像中一次性预测出边界框的坐标和对应的类别概率。"
  },
  {
    "question": "YOLOv1 中的主干网络结构模仿了以下哪个网络？",
    "options": [
      "VGG",
      "ResNet",
      "GoogLeNet",
      "AlexNet"
    ],
    "answer": "C",
    "analysis": "YOLOv1 的主干网络（Backbone）受 GoogLeNet 图像分类模型的启发。它包含24个卷积层和2个全连接层，但没有使用 Inception 模块，而是使用 1x1 降维层和 3x3 卷积层交替来替代。"
  },
  {
    "question": "YOLOv1 的特征图尺寸为 7×7×1024，展平后输入全连接层的向量长度为",
    "options": [
      "50176",
      "2048",
      "4096",
      "1024"
    ],
    "answer": "A",
    "analysis": "将特征图展平（Flatten）即计算所有维度的乘积。7 × 7 × 1024 = 49 × 1024 = 50176。因此展平后输入全连接层的向量长度为 50176。"
  },
  {
    "question": "以下关于 YOLOv1 中的边界框置信度的描述，错误的是",
    "options": [
      "置信度表示当前网格是否包含目标物体",
      "置信度的学习标签是 IoU 值",
      "所有边界框都需要参与置信度损失的计算",
      "置信度范围在 0 到 1 之间"
    ],
    "answer": "C",
    "analysis": "在 YOLOv1 中，并不是所有边界框都以相同方式参与置信度损失计算。对于包含目标的网格，只有与真实框 IoU 最大的那个预测框（负责预测该目标）才计算前景置信度损失和位置损失；未负责预测目标的框只计算背景置信度损失。"
  },
  {
    "question": "在 YOLOv1 中，以下哪个损失部分对小目标的权重更大？",
    "options": [
      "位置误差",
      "前景置信度误差",
      "背景置信度误差",
      "分类误差"
    ],
    "answer": "A",
    "analysis": "在 YOLOv1 的损失函数中，为了平衡大目标和小目标对位置误差的敏感度，对边界框的宽和高进行了开平方根处理。这使得相同尺寸的偏差在小目标上产生的损失比在大目标上更大，从而隐式地增加了小目标位置误差的权重。"
  },
  {
    "question": "YOLOv1 的非极大值抑制（NMS）用于",
    "options": [
      "优化置信度的计算",
      "防止多个边界框对同一目标的重复检测",
      "减少分类错误的概率",
      "提高网络的训练速度"
    ],
    "answer": "B",
    "analysis": "非极大值抑制（NMS, Non-Maximum Suppression）是一种后处理技术。在 YOLO 推理时，可能会对同一个目标产生多个预测框。NMS 通过保留置信度最高的框并抑制与其重叠度（IoU）较高的其他框，从而防止对同一目标的重复检测。"
  },
  {
    "question": "以下关于 YOLOv1 的优缺点描述，错误的是",
    "options": [
      "YOLOv1 对小目标的检测效果较差",
      "YOLOv1 检测速度非常快",
      "YOLOv1 适用于重叠目标的检测",
      "YOLOv1 的迁移能力强"
    ],
    "answer": "C",
    "analysis": "YOLOv1 将图像划分为 7x7 的网格，每个网格只能预测两个边界框，并且只能预测一个类别。这种空间限制导致 YOLOv1 在处理密集的小目标或相互重叠的目标时效果较差。"
  },
  {
    "question": "YOLOv1 采用归一化处理边界框的宽和高的主要原因是（ ）。",
    "options": [
      "提高边界框预测的速度",
      "避免数值不稳定导致训练发散",
      "减少对小目标的检测错误",
      "减少背景框的置信度损失"
    ],
    "answer": "B",
    "analysis": "YOLOv1 将预测的边界框宽高相对于整张图像的宽高进行归一化（值域限制在 0 到 1 之间）。这有助于统一不同尺度目标的回归范围，避免在计算损失时出现数值过大或不稳定的情况，从而防止训练发散，加速模型收敛。"
  },
  {
    "question": "编码器-解码器网络的主要应用场景是",
    "options": [
      "图像分类",
      "目标检测",
      "序列到序列的任务",
      "图像增强"
    ],
    "answer": "C",
    "analysis": "编码器-解码器（Encoder-Decoder）架构最初且最主要的应用场景是序列到序列（Seq2Seq）任务，如机器翻译、文本摘要、语音识别等，它能够处理输入和输出长度不固定的序列数据。"
  },
  {
    "question": "编码器的主要作用是",
    "options": [
      "生成目标序列",
      "提取输入特征并生成上下文表示",
      "对输入序列进行预测",
      "优化模型权重"
    ],
    "answer": "B",
    "analysis": "在编码器-解码器架构中，编码器（Encoder）负责读取并理解输入序列，提取其特征，并将其压缩编码成一个固定长度的上下文向量（Context Vector）或一系列隐藏状态表示。"
  },
  {
    "question": "解码器的主要作用是",
    "options": [
      "将上下文向量解码为目标序列",
      "提取输入特征",
      "生成固定长度的向量",
      "优化编码器的输出"
    ],
    "answer": "A",
    "analysis": "解码器（Decoder）的作用是接收编码器生成的上下文向量（Context Vector），并根据该上下文信息逐步生成目标序列（如翻译后的句子）。"
  },
  {
    "question": "以下哪个模块常用于编码器和解码器中",
    "options": [
      "卷积神经网络（CNN）",
      "循环神经网络（RNN）",
      "生成对抗网络（GAN）",
      "最近邻算法（KNN）"
    ],
    "answer": "B",
    "analysis": "在传统的序列到序列任务中，循环神经网络（RNN）及其变体（如 LSTM、GRU）是最常用于构建编码器和解码器的模块，因为它们天生适合处理带有时间依赖关系的时序数据。"
  },
  {
    "question": "在编码器-解码器结构中，解决长序列信息丢失问题的常用方法是",
    "options": [
      "增加网络层数",
      "使用全连接层",
      "引入注意力机制",
      "减少输入序列长度"
    ],
    "answer": "C",
    "analysis": "基础的编码器-解码器模型将整个输入序列压缩成一个固定长度的向量，这在处理长序列时会导致早期信息的丢失（信息瓶颈）。引入注意力机制（Attention Mechanism）允许解码器在生成当前词时，动态地关注输入序列中相关的不同部分，有效解决了长序列信息丢失的问题。"
  },
  {
    "question": "在编码器-解码器网络中，编码器的输出通常是",
    "options": [
      "目标序列",
      "上下文向量",
      "预测标签",
      "损失值"
    ],
    "answer": "B",
    "analysis": "编码器处理完输入序列后，通常会输出一个或一组上下文向量（Context Vector，也称为语义向量或隐藏状态），作为输入序列的浓缩特征表示，随后传递给解码器作为其生成目标序列的初始输入。"
  },
  {
    "question": "以下哪种编码器-解码器结构适合输入和输出序列长度不同的任务？",
    "options": [
      "卷积神经网络",
      "循环神经网络",
      "序列到序列（Seq2Seq）模型",
      "生成对抗网络（GAN）"
    ],
    "answer": "C",
    "analysis": "序列到序列（Seq2Seq）模型专门为输入和输出序列长度不固定的任务（如机器翻译、文本摘要等）设计。它通过编码器将变长的输入序列压缩成一个固定长度的上下文向量，再由解码器根据该向量生成变长的输出序列。"
  },
  {
    "question": "在编码器-解码器网络中，以下哪个问题常出现在解码器阶段？",
    "options": [
      "梯度爆炸",
      "梯度消失",
      "暴露偏差（Exposure Bias）",
      "过拟合"
    ],
    "answer": "C",
    "analysis": "暴露偏差（Exposure Bias）是自回归解码器中常见的问题。在训练阶段，解码器通常使用真实的目标序列（Ground Truth）作为下一步的输入（即Teacher Forcing）；而在推理（测试）阶段，解码器只能使用自己前一步生成的输出作为下一步的输入。这种训练和推理时输入数据分布的不一致性被称为暴露偏差。"
  },
  {
    "question": "在编码器-解码器结构中，以下哪种机制能够在解码过程中动态选择输入序列中最相关的部分？",
    "options": [
      "循环神经网络（RNN）",
      "注意力机制",
      "全连接层",
      "池化层"
    ],
    "answer": "B",
    "analysis": "注意力机制（Attention Mechanism）允许解码器在生成每一个输出词时，动态地计算输入序列中各个位置的权重，从而将“注意力”集中在与当前生成任务最相关的输入部分，有效解决了长序列信息丢失的问题。"
  },
  {
    "question": "Transformer 网络与传统编码器-解码器网络的主要区别是",
    "options": [
      "Transformer 网络不使用卷积操作",
      "Transformer 网络完全基于注意力机制",
      "Transformer 网络不需要解码器",
      "Transformer 网络不适合序列到序列任务"
    ],
    "answer": "B",
    "analysis": "传统 Seq2Seq 模型主要依赖 RNN 或 CNN 来处理序列，而 Transformer 摒弃了循环和卷积结构，其核心思想是“Attention Is All You Need”，即完全依靠自注意力机制（Self-Attention）来捕捉序列中词与词之间的全局依赖关系。"
  },
  {
    "question": "Transformer 网络的核心机制是",
    "options": [
      "循环神经网络（RNN）",
      "注意力机制",
      "卷积神经网络（CNN）",
      "生成对抗网络（GAN）"
    ],
    "answer": "B",
    "analysis": "Transformer 的核心是注意力机制，特别是多头自注意力机制（Multi-Head Self-Attention）。它使得模型能够并行处理序列数据，并在计算单个位置的表示时，能够直接关注到序列中的所有其他位置。"
  },
  {
    "question": "Transformer 网络中用于捕获输入序列顺序信息的是",
    "options": [
      "位置编码（Positional Encoding）",
      "多头自注意力",
      "前馈神经网络",
      "正则化"
    ],
    "answer": "A",
    "analysis": "由于 Transformer 抛弃了 RNN 的时序递进结构，模型本身失去了感知序列中词语相对或绝对位置的能力。为了解决这个问题，Transformer 引入了位置编码（Positional Encoding），将其与词嵌入相加，从而让模型能够捕获序列的顺序信息。"
  },
  {
    "question": "Transformer 中的缩放点积注意力（Scaled Dot-Product Attention）的计算公式中，为了避免数值过大导致梯度不稳定，通常会对点积结果进行",
    "options": [
      "求和",
      "取对数",
      "除以向量维度的平方根",
      "添加正则化项"
    ],
    "answer": "C",
    "analysis": "在计算缩放点积注意力时，Query 和 Key 的点积结果会随着向量维度（d_k）的增大而变大，这会导致 Softmax 函数进入梯度极小的饱和区。为了缓解这个问题，公式中会将点积结果除以向量维度的平方根（即 `sqrt(d_k)`），从而使方差保持稳定，避免梯度消失。"
  },
  {
    "question": "Transformer 的多头注意力机制的主要作用是",
    "options": [
      "减少模型训练时间",
      "增强模型对不同特征的关注能力",
      "降低模型复杂度",
      "增加模型的深度"
    ],
    "answer": "B",
    "analysis": "多头注意力机制通过将 Query、Key、Value 映射到多个不同的子空间中分别计算注意力，最后再将结果拼接起来。这使得模型能够同时从不同的表示子空间中捕获多种维度的特征信息，增强了模型对不同特征（如语法、语义等）的关注能力。"
  },
  {
    "question": "Transformer 的编码器和解码器模块中，每个子层后面都使用了残差连接和层归一化，其主要目的是",
    "options": [
      "增加模型的深度",
      "提高模型的非线性表达能力",
      "缓解梯度消失问题并加速收敛",
      "防止模型的过拟合"
    ],
    "answer": "C",
    "analysis": "残差连接（Residual Connection）能够为梯度提供捷径，有效缓解深层网络中的梯度消失问题；层归一化（Layer Normalization）则能够稳定隐藏层的数据分布。两者结合使用能够大幅提升深层 Transformer 网络的训练稳定性，并加速模型收敛。"
  },
  {
    "question": "Transformer 中，解码器的掩码（Mask）用于",
    "options": [
      "阻止模型关注输入序列中的无关部分",
      "防止解码器访问未来的目标序列信息",
      "提高注意力的计算效率",
      "减少注意力计算的复杂度"
    ],
    "answer": "B",
    "analysis": "在自回归生成任务中，解码器在预测第 t 个词时，只能看到 t 时刻之前的词。解码器中的掩码（Look-ahead Mask）将未来时刻的注意力权重设为负无穷大（经过 Softmax 后变为 0），从而防止模型在训练时“作弊”看到未来的目标序列信息。"
  },
  {
    "question": "Transformer 的前馈神经网络（Feed-Forward Network, FFN）主要作用是",
    "options": [
      "捕获序列的位置信息",
      "对每个位置的特征进行非线性变换",
      "计算注意力权重",
      "减少模型的参数量"
    ],
    "answer": "B",
    "analysis": "Transformer 中的前馈神经网络是基于位置的（Position-wise），它对序列中的每个位置独立且相同地应用两个线性变换和一个 ReLU 激活函数。其主要作用是增加模型的非线性表达能力，对注意力机制提取出的特征进行进一步的非线性映射和特征提取。"
  },
  {
    "question": "以下关于 Transformer 的说法正确的是",
    "options": [
      "Transformer 使用循环结构来处理序列数据",
      "Transformer 网络中的解码器每一步都会使用之前生成的输出序列",
      "Transformer 无需对序列数据进行任何预处理",
      "Transformer 只能用于自然语言处理任务"
    ],
    "answer": "B",
    "analysis": "Transformer 的解码器在推理阶段是自回归的，即每一步生成新词时，都会将之前已经生成的所有输出序列作为当前步的输入（B正确）。A错误，Transformer 没有循环结构；C错误，需要进行分词、词嵌入和位置编码等预处理；D错误，Transformer 也被广泛应用于计算机视觉（如 ViT）和音频处理等领域。"
  },
  {
    "question": "Transformer 的优点不包括以下哪一项？",
    "options": [
      "高度并行化",
      "适合处理长序列",
      "对序列长度的限制较小",
      "计算复杂度低"
    ],
    "answer": "D",
    "analysis": "Transformer 的自注意力机制需要计算序列中所有词两两之间的注意力分数，其时间复杂度和空间复杂度与序列长度的平方成正比（即 O(N^2)）。因此，当序列非常长时，计算复杂度会急剧上升，计算复杂度低不是它的优点。"
  },
  {
    "question": "Transformer 的多头注意力机制包含以下哪几类注意力操作？",
    "options": [
      "自注意力和交叉注意力",
      "位置注意力和内容注意力",
      "时间注意力和频率注意力",
      "多分辨率注意力和全局注意力"
    ],
    "answer": "A",
    "analysis": "在 Transformer 中，多头注意力机制主要表现为两类操作：自注意力（Self-Attention，用于编码器内部以及解码器内部捕获自身序列的依赖关系）和交叉注意力（Cross-Attention / Encoder-Decoder Attention，用于解码器关注编码器的输出，从而建立输入和输出序列之间的联系）。"
  }
],
    fill: [
  {
    "question": "给定一个二维张量 `tensor = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9]])`，执行操作 `tensor[:, [1, 2]]`，输出结果是（1）。",
    "answer": "`tensor([[2, 3], [5, 6], [8, 9]])`",
    "analysis": "在切片操作 `tensor[:, [1, 2]]` 中，逗号前面的 `:` 表示选取所有的行；逗号后面的 `[1, 2]` 表示选取索引为 1 和 2 的列（即第 2 列和第 3 列）。因此，提取出的结果为 `tensor([[2, 3], [5, 6], [8, 9]])`。"
  },
  {
    "question": "`tensor = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` `result = tensor[tensor > 5]` 写出函数式：（1）",
    "answer": "`tensor([6, 7, 8, 9])`",
    "analysis": "表达式 `tensor > 5` 会生成一个与原张量形状相同的布尔张量，其中大于 5 的位置为 True，否则为 False。使用该布尔张量作为索引进行掩码操作时，PyTorch 会提取所有对应位置为 True 的元素，并将其展平为一维张量。因此结果为 `tensor([6, 7, 8, 9])`。"
  },
  {
    "question": "给定一个二维张量 `tensor = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9]])`，执行操作 `tensor[-1, :]`，输出结果是（1）。",
    "answer": "`tensor([7, 8, 9])`",
    "analysis": "在切片操作 `tensor[-1, :]` 中，`-1` 代表选取最后一行，`:` 代表选取该行的所有列。由于只选取了单行，结果会降维成一个一维张量，即 `tensor([7, 8, 9])`。"
  },
  {
    "question": "给定一个二维张量 `tensor = torch.tensor([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])`，执行操作 `tensor[::2, ::2]`，输出结果是（1）。",
    "answer": "`tensor([[1, 3], [9, 11]])`",
    "analysis": "切片语法 `start:end:step` 中，`::2` 表示从头到尾以步长为 2 进行采样。对于行 `::2`，选取了索引为 0 和 2 的行（即第 1 行和第 3 行）；对于列 `::2`，选取了索引为 0 和 2 的列（即第 1 列和第 3 列）。交叉提取后的结果为 `tensor([[1, 3], [9, 11]])`。"
  },
  {
    "question": "给定一个一维张量 `tensor = torch.tensor([1, 2, 3, 4, 5, 6, 7, 8])`，执行操作 `tensor[1:6:2]`，输出结果是（1）。",
    "answer": "`tensor([2, 4, 6])`",
    "analysis": "切片操作 `tensor[1:6:2]` 表示从索引 1 开始，到索引 6 结束（不包含索引 6），步长为 2。选取的索引依次为 1、3、5，对应原张量中的元素分别是 2、4、6。因此结果为 `tensor([2, 4, 6])`。"
  },
  {
    "question": "给定一个三维张量 `tensor = torch.tensor([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])`，执行操作 `tensor[:, ::2, 1]`，输出结果是（1）。",
    "answer": "`tensor([[2], [8]])`",
    "analysis": "原张量形状为 (2, 2, 3)。第一维 `:` 表示选取所有矩阵；第二维 `::2` 表示以步长 2 选取行，即只选取索引为 0 的行（由于使用了切片，该维度保留，大小变为 1）；第三维 `1` 表示选取索引为 1 的列（具体索引操作会使该维度降维消失）。因此，从第一个矩阵的第 0 行取索引 1 的元素（2），从第二个矩阵的第 0 行取索引 1 的元素（8），最终形状变为 (2, 1)，结果为 `tensor([[2], [8]])`。"
  },
  {
    "question": "给定一个三维张量 `tensor = torch.tensor([[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[10, 11, 12], [13, 14, 15], [16, 17, 18]]])`，执行操作 `tensor[::2, 1::2, ::2]`，输出结果是（1）。",
    "answer": "`tensor([[[4, 6]]])`",
    "analysis": "原张量形状为 (2, 3, 3)。第一维 `::2` 选取索引 0 的矩阵（保留维度）；第二维 `1::2` 从索引 1 开始步长为 2，选取索引 1 的行 `[4, 5, 6]`（保留维度）；第三维 `::2` 选取索引 0 和 2 的列，即元素 4 和 6（保留维度）。所有的切片操作都保留了原有的维度数，最终形状为 (1, 1, 2)，结果为 `tensor([[[4, 6]]])`。"
  },
  {
    "question": "给定一个形状为 (2, 4) 的二维张量 A，如何将其重塑为 (8,) 的形状？ 数据背景：假设 A 是一个 2x4 的矩阵，我们想将其转换为一维向量。 数据：`A = torch.tensor([[1, 2, 3, 4], [5, 6, 7, 8]])` 运算结果：`[1, 2, 3, 4, 5, 6, 7, 8]` 提示：可以通过 `torch.flatten` 或 `A.view` 实现 写出具体的函数式：（1）",
    "answer": "`torch.flatten(A)` 或者 `A.view(8)`",
    "analysis": "将多维张量展平为一维张量，可以使用 `torch.flatten(A)` 直接将所有维度展平；也可以使用 `A.view(8)` 或 `A.reshape(8)`（或者更通用的 `A.view(-1)`）显式地将其形状改变为长度为 8 的一维张量。"
  },
  {
    "question": "给定一个形状为 (3, 3) 的二维张量 A，如何将其转置？ 数据背景：假设 A 是一个 3x3 的矩阵，我们想将其行和列互换。 数据：`A = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` 运算结果：`[[1, 4, 7], [2, 5, 8], [3, 6, 9]]` 提示：可以通过 `torch.transpose` 实现 写出具体的函数式：（1）",
    "answer": "`torch.transpose(A, 0, 1)`",
    "analysis": "`torch.transpose(input, dim0, dim1)` 函数用于交换张量的两个维度。对于二维矩阵，行是第 0 维，列是第 1 维，因此 `torch.transpose(A, 0, 1)`（或简写为 `A.T`）可以实现矩阵的转置，将行和列互换。"
  },
  {
    "question": "给定一个形状为 (2, 3) 的二维张量 A，如何在其第 1 维添加一个维度？ 数据背景：假设 A 是一个 2x3 的矩阵，我们想将其扩展为三维张量。 数据：`A = torch.tensor([[1, 2, 3], [4, 5, 6]])` 运算结果：`[[[1, 2, 3]], [[4, 5, 6]]]` 提示：可以通过 `torch.unsqueeze` 实现 写出具体的函数式：（1）",
    "answer": "`torch.unsqueeze(A, 1)`",
    "analysis": "`torch.unsqueeze(input, dim)` 函数用于在指定位置插入一个大小为 1 的新维度。原张量形状为 (2, 3)，在第 1 维（索引为 1）插入新维度后，形状变为 (2, 1, 3)。因此 `torch.unsqueeze(A, 1)` 能得到正确结果。"
  },
  {
    "question": "给定一个形状为 (1, 2, 3) 的三维张量 A，如何去除其第 0 维的单一维度？ 数据背景：假设 A 是一个 1x2x3 的张量，我们想将其降维为二维张量。 数据：`A = torch.tensor([[[1, 2, 3], [4, 5, 6]]])` 运算结果：`[[1, 2, 3], [4, 5, 6]]` 提示：可以通过 `torch.squeeze` 实现 写出具体的函数式：（1）",
    "answer": "torch.squeeze(A)",
    "analysis": "`torch.squeeze` 函数用于移除张量中所有大小为 1 的维度。对于形状为 (1, 2, 3) 的张量 A，执行 `torch.squeeze(A)` 后，第 0 维（大小为 1）会被自动移除，张量形状变为 (2, 3)。也可以通过 `torch.squeeze(A, dim=0)` 明确指定仅移除第 0 维。"
  },
  {
    "question": "给定两个形状为 (2, 3) 的二维张量 A 和 B，如何将它们在第 0 维上拼接？ 数据背景：假设 A 和 B 都是 2x3 的矩阵，我们想将它们上下拼接。 数据：`A = torch.tensor([[1, 2, 3], [4, 5, 6]])`；`B = torch.tensor([[7, 8, 9], [10, 11, 12]])` 运算结果：`[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]` 提示：可以通过 `torch.cat` 实现 写出具体的函数式：（1）",
    "answer": "torch.cat((A, B), dim=0)",
    "analysis": "`torch.cat` 函数用于在已有的指定维度上对张量序列进行拼接。参数 `dim=0` 表示在第 0 维（即行方向）上进行拼接。两个形状均为 (2, 3) 的张量在 `dim=0` 拼接后，行数相加，形状变为 (4, 3)。"
  },
  {
    "question": "给定一个形状为 (2, 3) 的二维张量 A，如何将其分成两个形状为 (1, 3) 的张量？ 数据背景：假设 A 是一个 2x3 的矩阵，我们想将其沿第 0 维分成两个子矩阵。 数据：`A = torch.tensor([[1, 2, 3], [4, 5, 6]])` 运算结果：第一个张量：`[[1, 2, 3]]`，第二个张量：`[[4, 5, 6]]` 提示：可以通过 `torch.chunk` 实现 写出具体的函数式：（1）",
    "answer": "torch.chunk(A, 2, dim=0)",
    "analysis": "`torch.chunk(tensor, chunks, dim)` 函数用于将张量沿指定维度分割成特定数量的块。此处 `chunks=2` 且 `dim=0`，表示将形状为 (2, 3) 的张量 A 沿第 0 维均分为 2 个张量，每个分割后的子张量形状均为 (1, 3)。"
  },
  {
    "question": "数据：`A = torch.tensor([[1, 2], [3, 4]])`；`B = torch.tensor([[5, 6], [7, 8]])`；`C = torch.tensor([[9, 10], [11, 12]])` 运算结果：`[[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]]` 提示：可以通过 `torch.stack` 实现 写出具体的函数式：（1）",
    "answer": "torch.stack((A, B, C), dim=0)",
    "analysis": "`torch.stack` 函数用于沿着一个新的维度对输入张量序列进行连接。A、B、C 都是形状为 (2, 2) 的张量，使用 `torch.stack((A, B, C), dim=0)` 会在最外层（第 0 维）新增一个维度，将这三个张量堆叠起来，最终形成形状为 (3, 2, 2) 的三维张量。"
  },
  {
    "question": "给定一个形状为 (4, 4) 的二维张量 A，如何将其重塑为 (2, 2, 4) 的形状？ 数据背景：假设 A 是一个 4x4 的矩阵，我们想将其重塑为三维张量。 数据：`A = torch.tensor([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])` 运算结果：`[[[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]]` 提示：可以通过 `torch.reshape` 或者 `A.view` 实现 写出具体的函数式：（1）",
    "answer": "torch.reshape(A, (2, 2, 4)) 或者 A.view(2, 2, 4)",
    "analysis": "`torch.reshape` 和 `.view()` 都可以用来改变张量的形状，前提是重塑前后的元素总数保持不变。原张量 A 包含 \\(4 \\times 4 = 16\\) 个元素，目标形状 \\(2 \\times 2 \\times 4 = 16\\) 个元素。因此，直接传入目标形状的元组即可完成重塑。"
  },
  {
    "question": "给定一个形状为 (3, 3, 1) 的三维张量 A，如何去除其第2维的单一维度并将其转置？ 数据背景：假设 A 是一个 3x3x1 的张量，我们想将其降维并转置。 数据：`A = torch.tensor([[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]])` 运算结果：`[[1, 4, 7], [2, 5, 8], [3, 6, 9]]` 提示：可以通过 `torch.squeeze` 和 `torch.transpose` 实现 写出具体的函数式：（1）",
    "answer": "torch.transpose(torch.squeeze(A), 0, 1)",
    "analysis": "首先使用 `torch.squeeze(A)` 将形状为 (3, 3, 1) 的张量 A 的第 2 维（大小为 1）去除，使其形状降维变为 (3, 3)。然后使用 `torch.transpose(..., 0, 1)` 将降维后张量的第 0 维和第 1 维进行交换，从而实现矩阵的转置操作。"
  },
  {
    "question": "给定一个形状为 (2, 3) 的二维张量 A，如何将其第 0 维和第 1 维转置并在第 1 维添加一个维度？ 数据背景：假设 A 是一个 2x3 的矩阵，我们想将其转置并扩展为三维张量。 数据：`A = torch.tensor([[1, 2, 3], [4, 5, 6]])` 运算结果：`[[[1, 4]], [[2, 5]], [[3, 6]]]` 提示：可以通过 `torch.transpose` 和 `torch.unsqueeze` 实现 写出具体的函数式：（1）",
    "answer": "torch.unsqueeze(torch.transpose(A, 0, 1), 1)",
    "analysis": "首先，使用 `torch.transpose(A, 0, 1)` 将形状为 (2, 3) 的张量转置为 (3, 2)。接着，使用 `torch.unsqueeze(..., 1)` 在转置后张量的第 1 维插入一个大小为 1 的新维度，最终张量的形状变为 (3, 1, 2)。"
  },
  {
    "question": "给定一个形状为 (3, 3, 1) 的三维张量 A，如何去除其第 2 维的单一维度并将其重塑为 (9,) 的形状？ 数据背景：假设 A 是一个 3x3x1 的张量，我们想将其降维并重塑为一维向量。 数据：`A = torch.tensor([[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]])` 运算结果：`[1, 2, 3, 4, 5, 6, 7, 8, 9]` 提示：可以通过 `torch.squeeze` 和 `torch.reshape` 实现 写出具体的函数式：（1）",
    "answer": "torch.reshape(torch.squeeze(A), (9,))",
    "analysis": "首先通过 `torch.squeeze(A)` 移除大小为 1 的维度，将形状 (3, 3, 1) 降维变为 (3, 3)。然后通过 `torch.reshape(..., (9,))` 将其展平为包含 9 个元素的一维张量，形状变为 (9,)。"
  },
  {
    "question": "学习率是深度学习中一个非常重要的超参数，它决定了模型权重更新的幅度。具体来说，学习率控制了梯度下降过程中，模型参数朝着损失函数最小值方向移动的（1）。",
    "answer": "步长",
    "analysis": "在梯度下降算法中，参数更新的公式通常为 \\(w = w - \\text{lr} \\times \\text{gradient}\\)。其中学习率（lr）直接作为乘数，控制了参数在负梯度方向上更新的步长大小。步长过大会导致震荡无法收敛，步长过小会导致收敛速度极慢。"
  },
  {
    "question": "在PyTorch中，学习率的设置通常通过（1）来完成。",
    "answer": "优化器（Optimizer）",
    "analysis": "在 PyTorch 框架中，学习率是优化器（如 `torch.optim.SGD`、`torch.optim.Adam` 等）初始化时的核心参数。优化器负责保存和管理模型参数的状态，并根据计算出的梯度和设定的学习率来更新参数。"
  },
  {
    "question": "以下是一个简单的示例，展示如何在PyTorch中设置学习率： import torch import torch.optim as optim model = torch.nn.Linear(10, 1) # 下面这一步设置optim.SGD的学习率为0.01，使用optim.SGD的初始化函数完成（1）",
    "answer": "optimizer = optim.SGD(model.parameters(), lr=0.01)",
    "analysis": "实例化优化器时，需要传入需要被优化的模型参数集合（通常通过 `model.parameters()` 获取），并通过 `lr` 关键字参数显式指定初始学习率。"
  },
  {
    "question": "在训练过程中，可以通过optimizer.采用该方法设置学习率0.001： for param_group in optimizer.param_groups: （1）。",
    "answer": "param_group['lr'] = 0.001",
    "analysis": "PyTorch 的优化器将参数分组管理，存储在 `optimizer.param_groups` 列表中。每个 `param_group` 是一个字典，包含了该组参数的优化选项。通过遍历该列表并修改字典中键为 `'lr'` 的值，可以在训练过程中动态、手动地调整学习率。"
  },
  {
    "question": "使用PyTorch的lr_scheduler模块可以设置不同的学习率方案，其中Step Decay是每过一定数量的epoch，学习率乘以一个（1）。",
    "answer": "衰减因子",
    "analysis": "`StepLR`（步长衰减）策略会在指定的 epoch 间隔（`step_size`）到达时，将当前学习率乘以一个衰减因子（`gamma`，通常是一个小于 1 的浮点数），从而实现学习率的阶梯式下降。"
  },
  {
    "question": "余弦退火（Cosine Annealing）学习率按照（1）函数的规律逐渐减小。",
    "answer": "余弦",
    "analysis": "`CosineAnnealingLR` 策略利用余弦函数的值域变化规律（从 1 逐渐减小到 -1，通常映射到最大和最小学习率之间），使学习率在训练过程中呈现类似半个余弦曲线的平滑下降趋势。"
  },
  {
    "question": "在使用lr_scheduler.ReduceLROnPlateau时，参数patience=4表示如果连续（1）个epoch指标没有改善，则减少学习率。",
    "answer": "4",
    "analysis": "`ReduceLROnPlateau` 调度器用于在验证指标（如 loss 或 accuracy）停止改善时降低学习率。参数 `patience` 定义了容忍的 epoch 数量，即如果连续 `patience` 个 epoch 指标未提升，就会触发学习率衰减机制。"
  },
  {
    "question": "循环学习率（Cyclic Learning Rate）学习率在一定的范围内（1）变化。",
    "answer": "周期性",
    "analysis": "循环学习率（CLR）策略让学习率在一个设定的最小值（`base_lr`）和最大值（`max_lr`）之间周期性地来回变化。这种策略有助于模型在训练过程中跳出局部最优解或鞍点。"
  },
  {
    "question": "PSPNet 中，金字塔池化模块通过不同尺度的池化操作提取（1），以增强全局语义信息。",
    "answer": "多尺度上下文信息",
    "analysis": "在金字塔池化模块中，特征图被划分为不同大小的子区域（如 1x1, 2x2, 3x3, 6x6），并在这些区域上进行平均池化。这种设计使得网络能够同时提取不同尺度的上下文信息（Multi-scale Context Information），从而更好地理解场景全局。"
  },
  {
    "question": "输入数据的shape：(1, 3, 64, 64) torch.nn.Conv2d的输出参数：in_channels = 3, out_channels = 16, kernel_size = 3, stride = 2, padding = 1 输出数据的shape形状：（1）",
    "answer": "(1, 16, 32, 32)",
    "analysis": "卷积层输出尺寸计算公式为 \\(H_{out} = \\lfloor \\frac{H_{in} + 2 \\times \\text{padding} - \\text{kernel\\_size}}{\\text{stride}} \\rfloor + 1\\)。代入数据：\\(H_{out} = \\lfloor \\frac{64 + 2 \\times 1 - 3}{2} \\rfloor + 1 = \\lfloor \\frac{63}{2} \\rfloor + 1 = 31 + 1 = 32\\)。输出通道数为 16，批次大小为 1，因此输出形状为 (1, 16, 32, 32)。"
  },
  {
    "question": "输入数据的shape：(1, 3, 28, 28) torch.nn.Conv2d的输出参数：in_channels = 3, out_channels = 16, kernel_size = 5, stride = 1, padding = 2 输出数据的shape形状：（1）",
    "answer": "(1, 16, 28, 28)",
    "analysis": "代入卷积输出尺寸公式：\\(H_{out} = \\lfloor \\frac{28 + 2 \\times 2 - 5}{1} \\rfloor + 1 = 27 + 1 = 28\\)。由于设置了 `padding = kernel_size // 2` 且 `stride = 1`，特征图的空间尺寸保持不变（即 Same 卷积）。输出通道数为 16，因此形状为 (1, 16, 28, 28)。"
  },
  {
    "question": "输入数据的shape：(1, 3, 100, 100) torch.nn.Conv2d的输出参数：in_channels = 3, out_channels = 32, kernel_size = 3, stride = 1, padding = 0 输出数据的shape形状：（1）",
    "answer": "(1, 32, 98, 98)",
    "analysis": "代入卷积输出尺寸公式：\\(H_{out} = \\lfloor \\frac{100 + 2 \\times 0 - 3}{1} \\rfloor + 1 = 97 + 1 = 98\\)。输出通道数为 32，批次大小为 1，因此输出形状为 (1, 32, 98, 98)。"
  },
  {
    "question": "UNet 的解码器部分每一步都会将特征图的分辨率扩大（1）倍。",
    "answer": "2",
    "analysis": "UNet 的解码器在每一步上采样过程中，通常使用步长为 2 的转置卷积（反卷积）或 2 倍的双线性插值，将特征图的宽和高分别扩大 2 倍，以逐步恢复到原始输入图像的分辨率。"
  },
  {
    "question": "PSPNet 的全称是（1），是一种经典的语义分割网络。",
    "answer": "金字塔场景解析网络",
    "analysis": "PSPNet 的全称是 Pyramid Scene Parsing Network（金字塔场景解析网络）。它通过引入金字塔池化模块，有效聚合了不同区域的上下文信息，从而提升了复杂场景下的语义分割性能。"
  },
  {
    "question": "PSPNet 提出了（1）模块，用于捕获全局上下文信息并处理多尺度特征。",
    "answer": "金字塔池化",
    "analysis": "PSPNet 的核心创新是金字塔池化模块（Pyramid Pooling Module, PPM）。该模块通过在不同尺度上对特征图进行池化操作，捕获多尺度的局部和全局上下文信息，有效解决了分割任务中由于感受野不足导致的误判问题。"
  },
  {
    "question": "输入数据的shape：`(1, 3, 224, 224)` `torch.nn.Conv2d`的输出参数： in_channels = 3, out_channels = 64, kernel_size = 7, stride = 2, padding = 3 输出数据的shape形状：（1）",
    "answer": "(1, 64, 112, 112)",
    "analysis": "根据卷积尺寸计算公式：$H_{out} = \\lfloor \\frac{224 + 2 \\times 3 - 7}{2} \\rfloor + 1 = \\lfloor \\frac{223}{2} \\rfloor + 1 = 111 + 1 = 112$。宽度同理。输出通道数为64，批次大小为1，因此最终输出shape为 `(1, 64, 112, 112)`。"
  },
  {
    "question": "在 UNet 中，跳跃连接通过将编码器的特征图和解码器的特征图进行（1）操作来实现融合。",
    "answer": "拼接",
    "analysis": "与 FPN 或 ResNet 中使用的逐元素相加（Add）不同，UNet 的跳跃连接是在通道维度上将编码器的特征图与解码器的上采样特征图进行拼接（Concatenation/Concat），从而保留了更多的原始特征信息。"
  },
  {
    "question": "UNet 的设计最初是为了解决（1）中的分割任务，并取得了良好的效果。",
    "answer": "生物医学图像",
    "analysis": "UNet 最初是在 2015 年为生物医学图像分割（如细胞分割、血管分割）而设计的。由于医学图像通常数据量较小且需要极高的分割精度，UNet 凭借其跳跃连接和高效的数据增强策略，在这一领域表现出色。"
  },
  {
    "question": "UNet 的输出通道数等于（1），用于表示每个像素的类别概率。",
    "answer": "目标类别数",
    "analysis": "在 UNet 的最后一层，通常使用一个 1x1 的卷积层将特征图的通道数映射为目标类别数（如果是二分类则通道数为 1 或 2）。每个通道的输出代表该像素属于特定类别的概率（经过 Softmax 或 Sigmoid 激活后）。"
  },
  {
    "question": "在PyTorch中，最大池化层的类名为（1）。",
    "answer": "nn.MaxPool2d",
    "analysis": "在PyTorch的 `torch.nn` 模块中，用于二维空间数据的最大池化层类名是 `nn.MaxPool2d`，常用于图像特征的降采样。"
  },
  {
    "question": "使用PyTorch的最大池化层时，可以通过参数（1）来指定池化窗口的大小。",
    "answer": "kernel_size",
    "analysis": "在 `nn.MaxPool2d` 等池化层中，`kernel_size` 参数用于定义池化窗口的尺寸（例如 `kernel_size=2` 表示 2x2 的窗口）。"
  },
  {
    "question": "在最大池化层中，参数（1）用于指定池化操作的步长。",
    "answer": "stride",
    "analysis": "`stride` 参数控制池化窗口在输入特征图上滑动的步长。如果不显式指定，在PyTorch的池化层中，默认步长等于 `kernel_size`。"
  },
  {
    "question": "平均池化层的参数（1）用于在计算平均值时是否包含填充的零。",
    "answer": "count_include_pad",
    "analysis": "在 `nn.AvgPool2d` 中，`count_include_pad` 是一个布尔值参数。如果设为 True，则在计算平均值时会将 zero-padding 补充的零元素也计入分母中；默认值为 True。"
  },
  {
    "question": "参数（1）用于覆盖平均池化层默认的除数。",
    "answer": "divisor_override",
    "analysis": "在 `nn.AvgPool2d` 中，`divisor_override` 参数允许用户手动指定一个常数作为除数，从而覆盖默认计算平均值时使用的元素个数。"
  },
  {
    "question": "在使用平均池化层时，参数（1）决定了是否使用向上取整的方式来计算输出特征图的大小。",
    "answer": "ceil_mode",
    "analysis": "`ceil_mode` 决定在计算输出形状时使用向上取整（`ceil`）还是向下取整（`floor`）。当设为 True 时，使用向上取整，这在某些网络结构中可以保留边缘的特征。"
  },
  {
    "question": "图像分类任务的目标是识别图像中的主要对象，并将其归类到预定义的类别中，这通常使用（1）来提取图像特征。",
    "answer": "卷积神经网络（CNN）",
    "analysis": "卷积神经网络（CNN）通过卷积层、池化层等结构，能够有效提取图像的局部和全局特征，是图像分类任务中最核心的基础架构。"
  },
  {
    "question": "定位任务的目标是确定图像中特定对象的位置，这通常通过在图像中绘制（1）来实现。",
    "answer": "边界框",
    "analysis": "在计算机视觉中，目标定位（Localization）通常通过预测对象的边界框（Bounding Box）坐标（如中心点、宽、高，或左上角、右下角坐标）来标定对象在图像中的具体位置。"
  },
  {
    "question": "PSPNet 的主干网络通常采用（1）结构，用于提取图像的特征表示。",
    "answer": "ResNet",
    "analysis": "PSPNet 通常采用带有空洞卷积（Dilated Convolution）的 ResNet（如 ResNet-50 或 ResNet-101）作为主干网络。空洞卷积能够在不降低特征图分辨率的前提下扩大感受野，为后续的金字塔池化模块提供高质量的特征表示。"
  },
  {
    "question": "图像分割任务可以进一步细分为实例分割、语义分割和（1）。",
    "answer": "全景分割",
    "analysis": "图像分割主要包含三大类：语义分割（区分不同类别的像素）、实例分割（区分同一类别的不同个体像素）以及全景分割（Panoptic Segmentation，结合了前两者的特点，对背景和前景实例进行全面分割）。"
  },
  {
    "question": "PSPNet 的金字塔池化模块包含多个分支，每个分支使用不同的（1）大小来处理特征图。",
    "answer": "池化窗口",
    "analysis": "金字塔池化模块（PPM）通常包含 4 个并行的分支，每个分支采用不同的池化窗口（Pooling Window）大小和步长，将特征图分别池化为 1x1、2x2、3x3 和 6x6 的输出，从而捕获不同层次的感受野信息。"
  },
  {
    "question": "Neck的作用是对Backbone提取的特征进行进一步处理，如特征融合、特征金字塔构建等，以便更好地适应后续的（1）。",
    "answer": "检测任务",
    "analysis": "颈部网络（Neck，如FPN、PANet）位于Backbone和Head之间，其主要作用是融合高层语义信息和低层空间信息，从而提升模型对不同尺度目标的检测能力，更好地服务于后续的检测任务。"
  },
  {
    "question": "Head负责对Neck输出的特征进行最终的分类和定位，生成（1）。",
    "answer": "检测框和类别标签",
    "analysis": "检测头（Head）是目标检测网络的最后一部分，它接收来自Neck的融合特征，通过卷积或全连接层输出每个预测目标的边界框坐标（检测框）和对应的类别置信度（类别标签）。"
  },
  {
    "question": "One-Stage目标检测算法只需要完成特征抽取、分类和（1）三个任务。",
    "answer": "定位回归",
    "analysis": "单阶段（One-Stage）检测算法（如YOLO、SSD）是一种端到端的检测框架，它直接在提取的特征图上同时进行类别分类和边界框的定位回归，无需生成候选区域。"
  },
  {
    "question": "Two-Stage目标检测算法要完成的主要有特征抽取、生成RP、分类和（1）四个任务。",
    "answer": "定位回归",
    "analysis": "双阶段（Two-Stage）检测算法（如Faster R-CNN）首先通过RPN（Region Proposal Network）生成候选区域（RP），然后再对这些候选区域进行精确的类别分类和边界框的定位回归。"
  },
  {
    "question": "在目标检测网络中，Backbone、Neck和Head三个部分相互协作，共同构成了一个高效的（1）。",
    "answer": "目标检测网络",
    "analysis": "现代目标检测框架通常被模块化为Backbone（特征提取）、Neck（特征融合）和Head（预测输出）三个核心部分，它们共同组成了一个完整且高效的目标检测网络。"
  },
  {
    "question": "在 YOLOv1 中，输入图像被划分为（1）个网格。",
    "answer": "7x7",
    "analysis": "YOLOv1将输入图像（通常为448x448）划分为 $7 \\times 7$ 的网格（Grid）。如果一个物体的中心落在某个网格中，该网格就负责预测这个物体。"
  },
  {
    "question": "YOLOv1 采用了（1）来表示边框的位置和大小。",
    "answer": "中心坐标（x，y）、宽度w和高度h",
    "analysis": "YOLOv1预测的边界框包含四个坐标信息：边界框中心相对于网格单元的偏移量 $(x, y)$，以及边界框相对于整张图像的宽度 $w$ 和高度 $h$。"
  },
  {
    "question": "YOLOv2 引入了（1）的概念以改善对不同形状和大小物体的捕捉。",
    "answer": "锚框（Anchors）",
    "analysis": "为了提高召回率和定位精度，YOLOv2借鉴了Faster R-CNN的思想，引入了锚框（Anchor Boxes），通过在特征图的每个网格上预设不同比例和大小的先验框来预测目标。"
  },
  {
    "question": "YOLOv2 中，定位预测改为预测边界框相对于（1）。",
    "answer": "锚框的偏移量",
    "analysis": "引入锚框后，YOLOv2不再直接预测边界框的宽和高，而是预测边界框相对于预设锚框（Anchor）的尺寸偏移量以及相对于网格单元的坐标偏移量，这使得网络更容易学习。"
  },
  {
    "question": "YOLOv2 采用（1）层来结合高分辨率特征和低分辨率特征，以提高小物体的检测能力。",
    "answer": "passthrough",
    "analysis": "YOLOv2引入了passthrough层（直通层），将较浅层的高分辨率特征图（如 $26 \\times 26$）进行拆分并与深层的低分辨率特征图（如 $13 \\times 13$）进行拼接（Concat），从而保留了更多细粒度特征，有利于小目标检测。"
  },
  {
    "question": "在 YOLOv2 的训练过程中，通过进行（1）来增强模型的泛化能力。",
    "answer": "多尺度训练",
    "analysis": "YOLOv2去除了全连接层，使得网络可以接受任意尺寸的输入。在训练过程中，每隔一定的迭代次数就会动态改变输入图像的尺寸（如从320到608），这种多尺度训练机制大大增强了模型对不同分辨率图像的泛化能力。"
  },
  {
    "question": "YOLOv1 的损失函数包括（1）部分。",
    "answer": "4",
    "analysis": "YOLOv1的损失函数主要由四个部分组成：边界框中心坐标误差（x,y）、边界框尺寸误差（w,h）、置信度误差（包含有物体和无物体两部分，有时被统称为置信度误差，或细分为两部分）以及分类误差。按照经典划分，通常认为是4个主要部分（坐标、尺寸、置信度、类别）。"
  },
  {
    "question": "在 YOLOv2 中，使用（1）算法对训练数据集的边界框进行聚类，以确定锚框尺寸。",
    "answer": "k-means",
    "analysis": "YOLOv2 引入了先验框（Anchor Boxes）的概念。为了使网络更容易学习预测边界框，YOLOv2 放弃了手动设定先验框尺寸，而是采用 k-means 聚类算法对训练集中的真实边界框（Ground Truth）进行聚类，从而自动找到更具代表性的锚框尺寸。"
  },
  {
    "question": "YOLOv3 使用了新的网络架构 Darknet-53，它包含53个卷积层，并且使用了（1）来帮助网络学习更复杂的特征。",
    "answer": "残差连接",
    "analysis": "YOLOv3 的主干网络升级为 Darknet-53，该网络包含 53 个卷积层。为了解决深层网络中的梯度消失问题并提取更深层次的语义特征，Darknet-53 大量借鉴了 ResNet 的思想，引入了残差连接（Residual Connections）。"
  },
  {
    "question": "YOLOv3 在三个不同的尺度上进行预测，这有助于提高对（1）的检测能力。",
    "answer": "小目标",
    "analysis": "YOLOv3 借鉴了特征金字塔网络（FPN）的思想，在三个不同尺度的特征图上进行边界框的预测。较大的特征图具有更高的空间分辨率，能够保留更多的细节信息，因此显著提升了对小目标的检测能力。"
  },
  {
    "question": "YOLOv3 使用（1）来预测边界框的置信度，而不是使用线性激活函数。",
    "answer": "逻辑回归",
    "analysis": "在 YOLOv3 中，每个边界框的置信度（Objectness score）是通过逻辑回归（Logistic Regression，即 Sigmoid 函数）来预测的。这使得网络能够输出一个 0 到 1 之间的概率值，表示该边界框包含目标的可能性。"
  },
  {
    "question": "YOLOv4 使用了CSPDarknet53作为主干网络，它引入了（1）的设计，有助于减少计算量和提高梯度流。",
    "answer": "跨阶段局部网络",
    "analysis": "YOLOv4 的主干网络是 CSPDarknet53。CSP（Cross Stage Partial Network，跨阶段局部网络）结构通过将基础层的特征映射分为两部分，然后通过跨阶段层次结构将它们合并，从而在减少计算量的同时保证了丰富的梯度组合。"
  },
  {
    "question": "YOLOv4 使用了（1）激活函数，它是一种平滑的非线性激活函数，可以改善网络的性能。",
    "answer": "Mish",
    "analysis": "YOLOv4 在主干网络中广泛使用了 Mish 激活函数。Mish 是一种自正则化的非单调神经激活函数，其平滑的特性有助于信息在神经网络中更好地流动，从而提升了模型的准确率和泛化能力。"
  },
  {
    "question": "YOLOv4 引入了（1）正则化技术，通过在训练过程中随机丢弃特征图的块来提高模型的鲁棒性。",
    "answer": "DropBlock",
    "analysis": "DropBlock 是一种针对卷积神经网络的正则化方法。与传统的 Dropout 随机丢弃独立像素不同，DropBlock 会随机丢弃特征图上的连续块（Block），这迫使网络在其他区域寻找证据，从而有效防止过拟合并提高鲁棒性。"
  },
  {
    "question": "YOLOv4 使用了（1）数据增强技术，它将四张不同的图像拼接成一张，这有助于提高模型对不同尺度、形状和背景的适应性。",
    "answer": "Mosaic",
    "analysis": "Mosaic 是 YOLOv4 提出的一种强大的数据增强方法。它将四张不同的训练图像随机缩放、裁剪并拼接成一张图像。这不仅丰富了检测目标的背景，还等效于增加了小目标的数量，同时允许在单张 GPU 上计算时使用较小的 Batch Size。"
  },
  {
    "question": "YOLOv4 使用了（1）损失函数来优化边界框的预测，它考虑了边界框的重叠面积、中心点距离和长宽比。",
    "answer": "CIoU",
    "analysis": "YOLOv4 采用了 CIoU（Complete IoU）Loss 作为边界框回归损失。CIoU 同时考虑了预测框与真实框之间的重叠面积、中心点欧氏距离以及长宽比的一致性，使得边界框的回归更加稳定和精确。"
  },
  {
    "question": "在 YOLOv4 中，通道注意力机制（CAM）通过计算特征图的（1）关系来生成一个注意力权重图。",
    "answer": "通道间",
    "analysis": "通道注意力机制（Channel Attention Mechanism）的核心在于关注“什么”特征是有意义的。它通过对特征图在空间维度上进行池化，然后利用多层感知机计算各个通道之间的依赖关系，从而为每个通道分配不同的权重。"
  },
  {
    "question": "YOLOv4 中的路径聚合网络（PANet）通过（1）和自下而上路径来融合不同尺度的特征。",
    "answer": "自顶向下",
    "analysis": "PANet（Path Aggregation Network）在 FPN 的自顶向下（Top-down）路径基础上，增加了一条自下而上（Bottom-up）的路径。这种双向融合机制使得底层的高分辨率空间信息能够更容易地传递到顶层，增强了多尺度特征的表达能力。"
  },
  {
    "question": "UNet 的编码器部分主要由（1）层组成，用于提取图像的特征。",
    "answer": "卷积和下采样",
    "analysis": "UNet 的编码器（收缩路径）主要由重复的卷积层（通常是 3x3 卷积）和用于下采样的最大池化层（2x2）组成。这一过程不断减小特征图的空间尺寸，同时增加通道数，以提取深层次的语义特征。"
  },
  {
    "question": "UNet 的解码器部分通过（1）操作逐步恢复特征图的空间分辨率。",
    "answer": "上采样或反卷积",
    "analysis": "UNet 的解码器（扩展路径）通过上采样（如 2x2 的转置卷积/反卷积）操作，将特征图的空间分辨率逐步放大，最终恢复到与输入图像一致的尺寸，以便进行像素级的分类。"
  },
  {
    "question": "UNet 网络的一个关键特点是它使用了（1）连接，在编码器和解码器之间进行信息传递。",
    "answer": "跳跃（skip）",
    "analysis": "UNet 最著名的设计就是跳跃连接（Skip Connections）。它将编码器中高分辨率的浅层特征直接传递给解码器中对应分辨率的深层特征，弥补了下采样过程中丢失的空间细节信息。"
  },
  {
    "question": "编码器-解码器结构中的自注意力机制可以捕获输入序列中的（1），从而提升建模效果。",
    "answer": "长程依赖关系",
    "analysis": "自注意力机制（Self-Attention）允许序列中的每个元素与序列中的所有其他元素直接进行交互计算。这种全局的计算方式使得模型能够非常高效地捕获长程依赖关系（Long-range Dependencies），这是 Transformer 模型优于传统 RNN 的关键所在。"
  },
  {
    "question": "在图像到文本的生成任务中，编码器通常使用（1）提取图像特征。",
    "answer": "卷积神经网络",
    "analysis": "在图像描述生成（Image Captioning）等图像到文本的任务中，通常采用卷积神经网络（CNN，如 ResNet、VGG）作为编码器来提取图像的视觉特征，然后将这些特征输入到 RNN 或 Transformer 解码器中生成文本。"
  },
  {
    "question": "UNet 是一种典型的（1）结构，用于图像分割任务。",
    "answer": "编码器-解码器",
    "analysis": "UNet 是一种经典的完全卷积神经网络，其网络结构呈 U 型，左侧是用于特征提取的编码器（收缩路径），右侧是用于恢复分辨率的解码器（扩展路径），是典型的编码器-解码器架构。"
  },
  {
    "question": "序列到序列模型中的解码器通常使用（1）机制来动态关注输入序列的不同部分。",
    "answer": "注意力",
    "analysis": "在传统的 Seq2Seq 模型中，编码器将整个输入压缩为一个固定长度的向量，这在处理长序列时容易丢失信息。引入注意力机制（Attention Mechanism）后，解码器在生成每个目标词时，都可以动态地计算并关注输入序列中相关的部分，极大地提升了模型性能。"
  },
  {
    "question": "解码器的主要任务是将编码器的隐藏表示解压为（1），以生成目标输出。",
    "answer": "原始输入的重构或目标输出",
    "analysis": "解码器（Decoder）的作用与编码器相反。它接收编码器生成的隐藏表示，并将其映射回目标数据空间。在自编码器中，输出是原始输入的重构；在机器翻译等任务中，输出则是目标语言的序列。"
  },
  {
    "question": "编码器-解码器结构常用于（1）任务，例如机器翻译、图像分割和图像生成。",
    "answer": "序列到序列",
    "analysis": "编码器-解码器架构最初在序列到序列（Seq2Seq）任务中取得了巨大成功，如机器翻译（将一种语言序列映射为另一种语言序列）。后来该思想被广泛推广到图像分割（如 UNet）和图像生成等领域。"
  },
  {
    "question": "在语义分割任务中，编码器-解码器结构的解码器部分通常通过（1）或反卷积操作恢复图像分辨率。",
    "answer": "上采样",
    "analysis": "在语义分割网络中，编码器通过池化或步长卷积降低分辨率以提取特征。为了输出与原图同尺寸的分割掩码，解码器需要使用上采样（如双线性插值）或反卷积（转置卷积）操作来逐步恢复特征图的空间分辨率。"
  },
  {
    "question": "在机器翻译中，编码器的作用是将源语言的句子编码为（1），供解码器生成目标语言。",
    "answer": "上下文向量",
    "analysis": "在经典的 Seq2Seq 机器翻译模型中，编码器（通常是 RNN 或 Transformer）读取源语言句子，并将其压缩成一个固定长度或变长的上下文向量（Context Vector），解码器根据这个向量逐步生成目标语言的单词。"
  },
  {
    "question": "在 YOLOv4 中，空间注意力机制（SAM）通过计算特征图的（1）关系来生成一个注意力权重图。",
    "answer": "空间位置间",
    "analysis": "空间注意力机制（Spatial Attention Module, SAM）关注的是“哪里”的特征更有意义。它通过对特征图在通道维度上进行池化（如最大池化和平均池化），然后经过卷积层计算空间位置间的依赖关系，生成空间权重图。"
  },
  {
    "question": "PSPNet 的金字塔池化模块能够有效缓解（1）的问题，从而提高分割精度。",
    "answer": "感受野不足",
    "analysis": "在传统的全卷积网络（FCN）中，由于感受野有限，网络往往难以结合全局上下文来对局部像素进行分类（例如将水面误认为道路）。PSPNet 的 PPM 模块通过聚合全局和多尺度先验信息，有效缓解了感受野不足的问题。"
  },
  {
    "question": "编码器的主要任务是将输入数据压缩成（1），以便提取高级特征。",
    "answer": "隐藏表示（隐空间表示）",
    "analysis": "在编码器-解码器（Encoder-Decoder）架构中，编码器负责接收原始输入数据并将其映射到一个低维的、密集的向量空间中，这个向量通常被称为隐藏表示（Latent Representation）或上下文向量，包含了输入数据的高级语义特征。"
  },
  {
    "question": "均方误差损失（MSELoss）的表达式是( 1 )。",
    "answer": "$\\frac{1}{n} \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2$",
    "analysis": "均方误差损失（Mean Squared Error Loss）常用于回归任务，计算的是模型预测值 $\\hat{y}_i$ 与真实标签 $y_i$ 之间差值的平方的平均值。公式中 $n$ 为样本总数，该损失函数对异常值较为敏感。"
  },
  {
    "question": "交叉熵损失（CrossEntropyLoss）的表达式是( 1 )。",
    "answer": "$-\\frac{1}{n} \\sum_{i=1}^{n} \\sum_{c=1}^{m} y_{ic} \\log(\\hat{y}_{ic})$",
    "analysis": "交叉熵损失广泛应用于多分类任务。公式中 $n$ 是样本数量，$m$ 是类别总数。$y_{ic}$ 是一个指示变量（若样本 $i$ 的真实类别为 $c$ 则为1，否则为0），$\\hat{y}_{ic}$ 是模型预测样本 $i$ 属于类别 $c$ 的概率。该函数衡量了真实概率分布与预测概率分布之间的差异。"
  },
  {
    "question": "Hinge 损失（HingeLoss）的表达式是( 1 )。",
    "answer": "$\\max(0, 1 - t_i \\cdot y_i)$",
    "analysis": "Hinge Loss 常用于支持向量机（SVM）等二分类模型中，旨在实现最大化间隔分类。公式中 $t_i$ 为真实标签（通常取值为 $\\pm 1$），$y_i$ 为模型的预测输出（未经过激活函数映射的原始值）。当预测值和真实标签符号一致且置信度足够高（乘积大于等于1）时，损失为0；否则会产生线性增长的损失。"
  },
  {
    "question": "Focal Loss 的表达式是( 1 )。",
    "answer": "$-\\alpha_t (1 - \\hat{y}_i)^\\gamma \\log(\\hat{y}_i)$",
    "analysis": "Focal Loss 是在标准交叉熵损失的基础上提出的改进方案，主要用于解决目标检测等任务中正负样本比例严重失衡的问题。公式中 $\\alpha_t$ 是平衡因子，用于调节正负样本的权重；$(1 - \\hat{y}_i)^\\gamma$ 是调制系数（$\\gamma$ 为聚焦参数），其作用是降低大量易分样本（预测概率高的样本）的损失权重，迫使模型在训练时更加关注那些难分样本。"
  },
  {
    "question": "二分类交叉熵损失（BCELoss）的表达式是( 1 )。",
    "answer": "$-\\frac{1}{n} \\sum_{i=1}^{n} [y_i \\log(\\hat{y}_i) + (1 - y_i) \\log(1 - \\hat{y}_i)]$",
    "analysis": "二分类交叉熵损失（Binary Cross Entropy Loss）是多分类交叉熵在二分类场景下的特例。公式中真实标签 $y_i \\in \\{0, 1\\}$，预测值 $\\hat{y}_i \\in$ 表示样本被预测为正类的概率。当真实标签 $y_i = 1$ 时，损失函数只计算 $-\\log(\\hat{y}_i)$；当 $y_i = 0$ 时，只计算 $-\\log(1 - \\hat{y}_i)$。"
  }
],
    short: [
  {
    "question": "多层传感器停止发展的原因有哪些？",
    "answer": "（2分）1. 计算限制：硬件不足，计算效率低。\n（2分）2. 理论瓶颈：梯度消失/爆炸，缺乏有效算法。\n（1分）3. 数据问题：数据不足或质量差。"
  },
  {
    "question": "ExponentialLR 和 MultiStepLR 的区别？",
    "answer": "（2分）1. ExponentialLR 按指数规律调整学习率，每个 epoch 后乘以一个衰减因子。\n（2分）2. MultiStepLR 在指定的若干 epoch 后调整学习率，适合需要分阶段调整的任务。\n（1分）3. 示例：scheduler = optim.lr_scheduler.MultiStepLR(optimizer, milestones=, gamma=0.1)。"
  },
  {
    "question": "为什么全连接神经网络需要使用激活函数？",
    "answer": "（1分）1. 激活函数引入非线性因素，使网络能够学习非线性映射。\n（2分）2. 没有激活函数，网络的输出只是输入的线性组合，无法处理复杂的非线性问题。\n（2分）3. 激活函数赋予神经网络表达复杂函数的能力，能够处理图像、语音等复杂数据类型。"
  },
  {
    "question": "梯度消失问题是如何影响神经网络训练的？",
    "answer": "（1分）1. 梯度消失问题使得反向传播中的梯度逐层减小，最终接近 0。\n（2分）2. 这导致靠近输入层的神经元参数更新缓慢甚至停止更新。\n（2分）3. 梯度消失问题会影响深层网络的学习能力，无法有效提取深层特征。"
  },
  {
    "question": "解决梯度消失问题有哪些常见的方法？",
    "answer": "（2分）1. 使用 ReLU 或其变体（如 Leaky ReLU、GELU）激活函数，避免梯度减小为 0。\n（2分）2. 采用 He 初始化或 Xavier 初始化方法，确保初始权重适中，防止梯度过小。\n（1分）3. 使用 Batch Normalization 减少内部协变量偏移，以及通过残差网络（ResNet）引入跳跃连接缓解梯度消失。"
  },
  {
    "question": "什么是梯度爆炸问题？",
    "answer": "（2分）1. 梯度爆炸问题是指在反向传播中，梯度值随着层数增多而不断增大，导致参数更新幅度过大。\n（2分）2. 这可能导致数值溢出，使模型无法稳定训练，甚至中断训练。\n（1分）3. 梯度爆炸通常出现在深层网络或循环神经网络中。"
  },
  {
    "question": "如何避免梯度爆炸问题？",
    "answer": "（1分）1. 使用梯度裁剪技术，将梯度限制在一个合理范围内，防止其过大。\n（2分）2. 采用稳定的激活函数（如 ReLU）和权重初始化方法（如 He 初始化）。\n（2分）3. 使用 Batch Normalization 稳定训练过程，或在循环神经网络中使用 LSTM/GRU 结构代替传统 RNN。"
  },
  {
    "question": "ReLU 激活函数有哪些优点？为什么在隐藏层推荐使用 ReLU？",
    "answer": "（1分）1. ReLU 激活函数在正区间内导数为 1，避免了梯度消失问题。\n（2分）2. 它的计算复杂度低，不需要像 Sigmoid 那样进行指数运算。\n（2分）3. ReLU 是隐藏层的首选激活函数，因为它能够保持梯度的非衰减性，有助于深层网络的高效训练。"
  },
  {
    "question": "Swish 激活函数的特点是什么？Leaky ReLU 如何解决 ReLU 的死亡问题？",
    "answer": "（2分）1. Swish 是一种平滑且非单调的激活函数，结合了 ReLU 和 Sigmoid 的优点，适合深层网络。\n（2分）2. Swish 的无上界、有下界特性，提高了模型的准确性和收敛速度。\n（1分）3. Leaky ReLU 通过允许负输入值有一个小的非零输出（通常是输入值的 0.01 倍），避免了 ReLU 的“死亡神经元”问题。"
  },
  {
    "question": "GELU 激活函数在 NLP 任务中为什么表现出色？",
    "answer": "（2分）1. GELU 激活函数结合了 ReLU 和 Dropout 的特点，通过概率的方式决定是否激活神经元。\n（2分）2. 它在负值区域保留了一部分输出，避免了 ReLU 在负值区域完全归零的问题。\n（1分）3. GELU 的平滑性和随机性使其更适合文本数据的不确定性和随机特性，特别是在自然语言处理任务中表现优异。"
  },
  {
    "question": "为什么在深度学习中避免使用 Sigmoid 和 Tanh 激活函数？",
    "answer": "（2分）1. Sigmoid 和 Tanh 激活函数容易导致梯度消失问题，尤其在深层网络中。\n（2分）2. 它们在输入值很大或很小时，导数接近 0，导致反向传播中梯度逐渐减小。\n（1分）3. 这会使得深层网络的学习效率大幅降低，因此不推荐在隐藏层中使用。"
  },
  {
    "question": "SGD 中动量的作用及调整动量参数的影响？",
    "answer": "（2分）1. 动量通过累积之前的梯度，使模型更新方向更加一致，减少震荡，加速收敛。\n（2分）2. 增大动量参数可以提高收敛速度，但可能导致不稳定；减小动量参数可以提高灵活性，但可能使收敛变慢。\n（1分）3. 动量在梯度方向变化较少时尤其有助于加速模型训练。"
  },
  {
    "question": "Adagrad 和 Adadelta 的区别及适用场景？",
    "answer": "（2分）1. Adagrad 为每个参数分配独立的学习率，适合稀疏数据；Adadelta 限制累积梯度大小，适合非平稳目标。\n（2分）2. Adagrad 的学习率会单调递减，可能导致训练过早停止；Adadelta 通过自适应调整保持学习率稳定。\n（1分）3. Adadelta 更适合处理变化剧烈的损失函数。"
  },
  {
    "question": "RMSprop 优化器中的 alpha 参数的作用？",
    "answer": "（2分）1. RMSprop 中的 alpha 参数是梯度平方的衰减率，控制历史梯度的影响权重。\n（2分）2. 增大 alpha 参数可以使学习率调整更加平滑，适合稳定训练。\n（1分）3. 减小 alpha 参数可以使模型对新的梯度变化更敏感，但可能导致训练不稳定。"
  },
  {
    "question": "Adam 优化器结合了哪些优化器的优点？betas 参数的作用？",
    "answer": "（2分）1. Adam 结合了 Momentum 和 RMSprop 的优点，既考虑了梯度的累积影响，又能自适应调整学习率。\n（2分）2. betas 参数控制一阶和二阶矩估计的加权，较大的 betas 值使模型更新更平滑；较小的 betas 值使模型对当前梯度变化更敏感。\n（1分）3. Adam 适用于稀疏数据和深度网络，具有较强的鲁棒性。"
  },
  {
    "question": "权重衰减（weight_decay）在 AdamW 优化器中的作用？",
    "answer": "（2分）1. 权重衰减通过正则化减少模型的复杂度，防止过拟合。\n（2分）2. 在 AdamW 中，权重衰减与学习率调整分离，使优化更加高效。\n（1分）3. 增大 weight_decay 减少过拟合风险，但可能欠拟合；减小 weight_decay 增加拟合能力，但可能过拟合。"
  },
  {
    "question": "PyTorch 中如何通过优化器实现 L2 正则化？",
    "answer": "（2分）1. 在 PyTorch 中，使用优化器的 weight_decay 参数即可实现 L2 正则化。\n（2分）2. L2 正则化通过在每次参数更新时对权重进行衰减，限制模型复杂度。\n（1分）3. 适当调整 weight_decay 参数可以平衡模型的拟合能力和正则化效果。"
  },
  {
    "question": "Adam 优化器为什么不需手动调整学习率？适用场景是什么？",
    "answer": "（2分）1. Adam 优化器结合动量和 RMSprop，自适应调整每个参数的学习率，减少手动调整的需求。\n（2分）2. 它适用于深度学习和稀疏数据，能够处理梯度更新的不均匀性。\n（1分）3. Adam 对于非平稳目标和大规模数据集表现尤为出色。"
  },
  {
    "question": "Step Decay 和 Cosine Annealing 的区别及适用场景？",
    "answer": "（2分）1. Step Decay 定期减少学习率，适用于需要避免过快收敛或震荡的场景。\n（2分）2. Cosine Annealing 根据余弦函数平滑减少学习率，适用于细化解空间时。\n（1分）3. 两者都能提高训练效果，但 Cosine Annealing 更适合逐步收敛的任务。"
  },
  {
    "question": "如何根据任务特性选择合适的激活函数？",
    "answer": "（2分）1. NLP 任务：推荐 GELU 和 Mish。\n（2分）2. 图像任务：优先选择 ReLU 或 Swish。\n（1分）3. 处理负值数据：使用 Leaky ReLU 或 PReLU。"
  },
  {
    "question": "请解释过拟合和欠拟合的区别，并给出一个例子说明如何通过调整模型复杂度来避免过拟合。",
    "answer": "（2分）1. 过拟合：模型在训练集表现很好，但在测试集表现差，失去泛化能力。\n（2分）2. 欠拟合：模型在训练集上表现就不好，没有捕捉到数据的基本规律。\n（1分）3. 避免过拟合：通过减少神经网络层数、神经元数量，或使用 L1/L2 正则化技术限制模型复杂度。"
  },
  {
    "question": "L1正则化和L2正则化有什么不同，它们是如何影响模型权重的？",
    "answer": "（2分）1. L1正则化：惩罚权重绝对值之和，倾向于产生稀疏权重矩阵，有助于特征选择。\n（2分）2. L2正则化：惩罚权重平方和，使权重趋于接近 0，但不会完全为 0，控制模型复杂度。\n（1分）3. 区别：L1 产生稀疏解，L2 让权重均匀减小。"
  },
  {
    "question": "Batch Normalization是如何工作的，它与Dropout有何不同？",
    "answer": "（2分）1. Batch Normalization：标准化每个 batch，让数据均值为 0，方差为 1，并通过缩放和平移还原数据分布特性。\n（3分）2. 与 Dropout 的区别：Dropout 随机丢弃神经元防止过拟合，而 Batch Normalization 加速训练，提高稳定性。"
  },
  {
    "question": "为什么说Batch Normalization可以减少对权重初始化的敏感性？",
    "answer": "（2分）1. 标准化每个 batch 的数据，使输入到激活函数的数据均值和方差一致。\n（3分）2. 无论权重如何初始化，标准化后的数据具有稳定分布，从而减少对权重初始化的依赖。"
  },
  {
    "question": "为什么Batch Normalization可以使深层网络使用 sigmoid 和 tanh 激活函数？",
    "answer": "（2分）1. Batch Normalization 减少了内部协变量偏移，使梯度在网络中更加稳定。\n（3分）2. 这一特性缓解了 sigmoid 和 tanh 激活函数导致的梯度消失问题。"
  },
  {
    "question": "Dropout 和 Batch Normalization 在训练深度学习模型时各自有什么优缺点？",
    "answer": "（2分）1. Dropout 的优缺点：减少模型对特定特征的依赖，提升泛化能力，但增加训练时间。\n（3分）2. Batch Normalization 的优缺点：加速训练，减少对权重初始化的敏感性，但在小 batch size 时效果较差。"
  },
  {
    "question": "L1 和 L2 正则化在实际应用中如何选择？它们各自适合什么样的场景？",
    "answer": "（2分）1. L1正则化：适用于需要特征选择的场景，产生稀疏解。\n（3分）2. L2正则化：适用于需要控制模型复杂度的场景，减少过拟合。"
  },
  {
    "question": "目标检测任务与图像分类任务的主要区别是什么？",
    "answer": "（2分）1. 目标检测：识别图像中多个对象，确定类别和位置（边界框）。\n（3分）2. 图像分类：仅识别图像中的主要对象类别。"
  },
  {
    "question": "什么是特征金字塔网络（FPN）？",
    "answer": "（2分）1. FPN 是一种颈部网络结构，通过自顶向下路径和横向连接构建多尺度特征金字塔。\n（3分）2. 它增强了网络对不同尺度目标的检测能力。"
  },
  {
    "question": "什么是实例分割？什么是语义分割？",
    "answer": "（2分）1. 实例分割：分割并区分每个独立对象，即使它们属于同一类别。\n（3分）2. 语义分割：分割类别级别的区域，不区分同类对象个体。"
  },
  {
    "question": "一阶段目标检测算法和两阶段目标检测算法的特点是什么？",
    "answer": "（2分）1. 一阶段算法：直接在特征图上检测，速度快但精度低，适用于实时性要求高的场景。\n（3分）2. 两阶段算法：先生成候选区域，再进行检测，精度高但速度慢，适用于高精度需求场景。"
  },
  {
    "question": "什么是Region Proposal Network (RPN)？",
    "answer": "（2分）1. RPN 是 Faster R-CNN 中的候选区域生成网络。\n（3分）2. 它提出可能包含目标的区域，供后续分类和边界框回归使用。"
  },
  {
    "question": "为什么目标检测网络需要Backbone、Neck和Head这三个部分？",
    "answer": "（1分）1. Backbone：提取多层次特征。\n（2分）2. Neck：融合和调整特征，增强多尺度处理能力。\n（2分）3. Head：分类和定位，生成最终检测结果。"
  },
  {
    "question": "YOLOv3相比于YOLOv2在网络架构上有哪些改进？",
    "answer": "（2分）1. 使用更深的 Darknet-53 主干网络，并引入残差连接。\n（2分）2. 在三个尺度进行预测，提高小目标检测能力。\n（1分）3. 通过聚类分析设计更精确的锚框。"
  },
  {
    "question": "Darknet-53 中不包含哪些层？CSPDarknet53 的主要特点是什么？",
    "answer": "（2分）1. Darknet-53：不包含全连接层和池化层，通过步长实现下采样。\n（3分）2. CSPDarknet53：使用跨阶段局部网络（CSP），减少计算量，缓解梯度消失。"
  },
  {
    "question": "YOLOv3中的多尺度预测是如何实现的？",
    "answer": "（2分）1. 在 32 倍、16 倍和 8 倍降采样的特征图上进行预测。\n（3分）2. 每个尺度上使用不同大小的锚框，检测不同尺寸的目标。"
  },
  {
    "question": "YOLOv4相比于YOLOv3在核心思想上有哪些主要改进？",
    "answer": "（2分）1. 使用 CSPDarknet53 主干网络和 Mish 激活函数。\n（2分）2. 引入 Mosaic 数据增强、DropBlock 正则化和 CIoU 损失函数。\n（1分）3. 增强对小目标的检测能力，提升训练稳定性。"
  },
  {
    "question": "什么是SPPNet，YOLOv4中的SPPNet的主要作用是什么？",
    "answer": "（3分）1. SPPNet：通过空间金字塔池化处理任意尺寸输入，输出固定大小特征向量。\n（2分）2. YOLOv4中的作用：增大感受野，适应不同输入尺寸，提高检测效率。"
  },
  {
    "question": "Mish激活函数相比于Leaky ReLU有哪些优势？",
    "answer": "（2分）1. Mish 的平滑特性使得梯度流更加稳定，有助于优化过程和模型的泛化能力。\n（3分）2. 在准确率和收敛速度方面优于 Leaky ReLU。"
  },
  {
    "question": "什么是Mosaic数据增强？YOLOv4中引入的目的是什么？",
    "answer": "（2分）1. Mosaic数据增强：将四张图片随机组合成一张新图片。\n（3分）2. 目的：模拟多种场景组合，提升模型对背景和上下文的适应能力。"
  }
]
};
