import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ToDoListApp {
    public static void main(String[] args) {
        // Crear la ventana principal
        JFrame frame = new JFrame("Lista de Tareas");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout());

        // Panel superior con campo de texto y botón
        JPanel inputPanel = new JPanel();
        JTextField taskInput = new JTextField(20);
        JButton addTaskButton = new JButton("Agregar");
        inputPanel.add(taskInput);
        inputPanel.add(addTaskButton);
        frame.add(inputPanel, BorderLayout.NORTH);

        // Panel central con la lista de tareas
        DefaultListModel<String> taskModel = new DefaultListModel<>();
        JList<String> taskList = new JList<>(taskModel);
        JScrollPane scrollPane = new JScrollPane(taskList);
        frame.add(scrollPane, BorderLayout.CENTER);

        // Panel inferior con botón para eliminar tarea
        JPanel deletePanel = new JPanel();
        JButton deleteButton = new JButton("Eliminar");
        deletePanel.add(deleteButton);
        frame.add(deletePanel, BorderLayout.SOUTH);

        // Acción para agregar tareas
        addTaskButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String taskText = taskInput.getText().trim();
                if (!taskText.isEmpty()) {
                    taskModel.addElement(taskText);
                    taskInput.setText(""); // Limpiar campo de texto
                }
            }
        });

        // Acción para eliminar tarea seleccionada
        deleteButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int selectedIndex = taskList.getSelectedIndex();
                if (selectedIndex != -1) {
                    taskModel.remove(selectedIndex);
                }
            }
        });

        // Hacer visible la ventana
        frame.setVisible(true);
    }
}
