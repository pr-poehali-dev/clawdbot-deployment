import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('deploy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <nav className="border-b bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Icon name="Bot" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">ClawdBot Cloud</h1>
              <p className="text-xs text-muted-foreground">Развертка за $100</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            Простое облачное решение
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Развертка ClawdBot за 3 минуты
          </h2>
          <p className="text-muted-foreground text-lg">
            Запустите своего AI-ассистента без технических знаний. Просто нажмите кнопку.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto h-auto p-1">
            <TabsTrigger value="deploy" className="flex flex-col gap-1 py-3">
              <Icon name="Rocket" size={20} />
              <span className="text-xs">Развертка</span>
            </TabsTrigger>
            <TabsTrigger value="monitor" className="flex flex-col gap-1 py-3">
              <Icon name="Activity" size={20} />
              <span className="text-xs">Мониторинг</span>
            </TabsTrigger>
            <TabsTrigger value="logs" className="flex flex-col gap-1 py-3">
              <Icon name="ScrollText" size={20} />
              <span className="text-xs">Логи</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex flex-col gap-1 py-3">
              <Icon name="Settings" size={20} />
              <span className="text-xs">Настройки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deploy" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">Быстрый старт</CardTitle>
                    <Badge variant="outline" className="text-primary">
                      <Icon name="Zap" size={14} className="mr-1" />
                      Рекомендуем
                    </Badge>
                  </div>
                  <CardDescription>
                    Автоматическая настройка всех компонентов за 3 минуты
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">Создание сервера</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">Установка ClawdBot</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">Настройка безопасности</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">Выдача доступов</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Rocket" size={18} className="mr-2" />
                    Развернуть за $100
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Списание после успешного запуска
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Ручная настройка</CardTitle>
                  <CardDescription>
                    Пошаговая настройка с полным контролем параметров
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Регион сервера</span>
                        <Badge variant="secondary">EU West</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Память</span>
                        <Badge variant="secondary">2 GB</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">CPU</span>
                        <Badge variant="secondary">2 Cores</Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="lg">
                    <Icon name="Sliders" size={18} className="mr-2" />
                    Настроить вручную
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Для опытных пользователей
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Активные развертки</CardTitle>
                <CardDescription>Ваши запущенные экземпляры ClawdBot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-40" />
                  <p>Пока нет активных развертываний</p>
                  <p className="text-sm mt-2">Нажмите "Развернуть за $100" чтобы начать</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitor" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Статус системы</CardTitle>
                  <Icon name="Activity" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">Online</div>
                  <p className="text-xs text-muted-foreground mt-1">Все системы работают</p>
                  <Progress value={100} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Использование CPU</CardTitle>
                  <Icon name="Cpu" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24%</div>
                  <p className="text-xs text-muted-foreground mt-1">Средняя нагрузка</p>
                  <Progress value={24} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Память</CardTitle>
                  <Icon name="Database" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.2 GB</div>
                  <p className="text-xs text-muted-foreground mt-1">Из 2 GB доступно</p>
                  <Progress value={60} className="mt-3" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>График активности</CardTitle>
                <CardDescription>Последние 24 часа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t"
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Системные логи</CardTitle>
                    <CardDescription>Последние события и действия</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-mono text-sm">
                  {[
                    { time: '14:32:01', type: 'info', msg: 'ClawdBot успешно запущен' },
                    { time: '14:31:45', type: 'success', msg: 'Подключение к API установлено' },
                    { time: '14:31:30', type: 'info', msg: 'Инициализация сервера...' },
                    { time: '14:31:15', type: 'info', msg: 'Загрузка конфигурации' },
                    { time: '14:31:00', type: 'success', msg: 'Система готова к работе' },
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Badge
                        variant={log.type === 'success' ? 'default' : 'secondary'}
                        className="mt-0.5"
                      >
                        {log.type}
                      </Badge>
                      <span className="text-muted-foreground min-w-20">{log.time}</span>
                      <span className="flex-1">{log.msg}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>API Ключи</CardTitle>
                  <CardDescription>Управление доступом к ClawdBot</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Claude API</span>
                      <Badge variant="default">
                        <Icon name="Check" size={12} className="mr-1" />
                        Подключен
                      </Badge>
                    </div>
                    <code className="text-xs block bg-background p-2 rounded">
                      sk-ant-*********************
                    </code>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Key" size={16} className="mr-2" />
                    Изменить ключ
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                  <CardDescription>Настройка оповещений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Email уведомления</p>
                      <p className="text-xs text-muted-foreground">О критических событиях</p>
                    </div>
                    <div className="w-11 h-6 bg-primary rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Telegram бот</p>
                      <p className="text-xs text-muted-foreground">Мгновенные оповещения</p>
                    </div>
                    <div className="w-11 h-6 bg-muted rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Настроить
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Биллинг</CardTitle>
                  <CardDescription>Информация об оплате</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Баланс</span>
                      <span className="text-2xl font-bold text-primary">$100</span>
                    </div>
                    <Progress value={100} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Хватит на ~30 дней работы</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Пополнить баланс
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Опасная зона</CardTitle>
                  <CardDescription>Необратимые действия</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                    <Icon name="Pause" size={16} className="mr-2" />
                    Остановить сервер
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Удалить развертку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-20 py-8 bg-card/50">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 ClawdBot Cloud. Развертка AI-ассистентов для всех.</p>
        </div>
      </footer>
    </div>
  );
}
