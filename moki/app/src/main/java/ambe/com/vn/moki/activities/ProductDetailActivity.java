package ambe.com.vn.moki.activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;

import ambe.com.vn.moki.R;

public class ProductDetailActivity extends AppCompatActivity {

    private Toolbar toolbar;
    private ImageView imgBack;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_detail);
        addControls();
        setUpActionBar();
    }

    private void addControls() {
        toolbar=findViewById(R.id.tb_product_detail);
        imgBack=findViewById(R.id.img_back);

    }

    private void setUpActionBar() {
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(false);
//        toolbar.setNavigationIcon(R.drawable.icon_back);
       imgBack.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View view) {
               finish();
           }
       });

    }
}
